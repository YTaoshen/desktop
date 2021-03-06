import { ITraySpecification, IConfiguration, WellKnownConfigurationKind } from "@reactivemarkets/desktop-types";
import { app, dialog, Menu, Tray, MenuItemConstructorOptions } from "electron";
import { fromEventPattern } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { ILogger } from "../../logging";
import { IShellService } from "../../shell";
import { IWindowService } from "../../windowing";
import { launcherService } from "../../launcher";
import { registryService } from "../../registry";
import { ITrayAnnotations } from "./iTrayAnnotations";
import { ITrayFactory } from "./iTrayFactory";

interface ITrayFactoryOptions {
    readonly defaultIcon: string;
    readonly defaultDocumentationUrl: string;
    readonly logger: ILogger;
    readonly shellService: IShellService;
    readonly windowService: IWindowService;
}

export class DefaultTrayFactory implements ITrayFactory {
    private readonly delay = 500;
    private readonly defaultDocumentationUrl: string;
    private readonly defaultIcon: string;
    private readonly logger: ILogger;
    private readonly shellService: IShellService;
    private readonly windowService: IWindowService;

    public constructor(options: ITrayFactoryOptions) {
        const { logger, shellService, windowService, defaultIcon, defaultDocumentationUrl } = options;

        this.logger = logger;
        this.shellService = shellService;
        this.windowService = windowService;
        this.defaultIcon = defaultIcon;
        this.defaultDocumentationUrl = defaultDocumentationUrl;
    }

    public create(configuration: IConfiguration) {
        try {
            const { description, name } = configuration.metadata;

            const spec = (configuration.spec ?? {}) as ITraySpecification;

            const { icon = this.defaultIcon } = spec;

            const tray = new Tray(icon);
            tray.setIgnoreDoubleClickEvents(true);
            if (description !== undefined) {
                tray.setToolTip(description);
            }

            this.setContextMenu(tray, spec);

            fromEventPattern<IConfiguration>(
                (h) => registryService.on("registered", h),
                (h) => registryService.off("registered", h),
            )
                .pipe(debounceTime(this.delay))
                .subscribe({
                    next: () => this.setContextMenu(tray, spec),
                });

            this.logger.info(`Configured ${name} tray menu`);

            return Promise.resolve(tray);
        } catch (error) {
            this.logger.error(`Failed to add tray icon ${error}`);

            return Promise.reject(error);
        }
    }

    private readonly setContextMenu = async (tray: Tray, spec: ITraySpecification) => {
        const dynamicTemplate = await this.buildDynamicTemplate();

        const staticTemplate = this.buildTemplate(spec);

        const contextMenu = Menu.buildFromTemplate([...dynamicTemplate, ...staticTemplate]);

        tray.setContextMenu(contextMenu);
    };

    private readonly buildDynamicTemplate = async (): Promise<MenuItemConstructorOptions[]> => {
        const registry = await registryService.getRegistry();

        return registry
            .filter(({ kind }) => {
                return kind === WellKnownConfigurationKind.Application;
            })
            .filter(({ metadata }) => {
                const { annotations } = metadata;
                if (annotations === undefined) {
                    return false;
                }

                const trayAnnotations = annotations["@reactivemarkets/desktop-core"] as ITrayAnnotations;

                return trayAnnotations?.includeInTray === true;
            })
            .map((configuration) => {
                return {
                    label: configuration.metadata.name,
                    click: this.launchApplication(configuration),
                };
            });
    };

    private readonly buildTemplate = (spec: ITraySpecification): MenuItemConstructorOptions[] => {
        const { documentationUrl = this.defaultDocumentationUrl } = spec;

        return [
            { type: "separator" },
            {
                label: "Documentation",
                click: this.openDocumentation(documentationUrl),
            },
            { type: "separator" },
            {
                label: "Bring All to Front",
                click: this.bringAllToFront,
            },
            { type: "separator" },
            {
                label: "Restart",
                type: "normal",
                accelerator: "CommandOrControl+R",
                click: this.restart,
            },
            { label: "Quit Desktop", type: "normal", role: "quit", accelerator: "CommandOrControl+Q" },
        ];
    };

    private readonly bringAllToFront = () => {
        app.focus({
            steal: true,
        });

        this.windowService.all().forEach(({ instance }) => {
            if (instance.isVisible()) {
                instance.moveTop();
            }
        });
    };

    private readonly launchApplication = (configuration: IConfiguration) => async () => {
        try {
            await launcherService.launch(configuration);
        } catch (error) {
            this.logger.error(`Failed to launch application: ${error}`);
        }
    };

    private readonly openDocumentation = (documentationUrl: string) => async () => {
        try {
            await this.shellService.openExternal(documentationUrl);
        } catch (error) {
            const title = "Can't open external url";
            const content = `${error}`;
            this.logger.error(`${title}: ${content}`);
            dialog.showErrorBox(title, content);
        }
    };

    private readonly restart = () => {
        app.relaunch();
        app.exit();
    };
}

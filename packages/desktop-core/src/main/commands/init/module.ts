import { WellKnownConfigurationKind } from "@reactivemarkets/desktop-types";
import { Output } from "../../configuration";

export { handler } from "./handler";

export const command = "init";

export const describe = "Create a configuration file";

export const builder = {
    kind: {
        alias: "k",
        choices: Object.values(WellKnownConfigurationKind),
        default: WellKnownConfigurationKind.Application,
        describe: "The configuration kind",
    },
    name: {
        alias: "n",
        describe: "The name of the application or service",
        string: true,
    },
    output: {
        alias: "o",
        choices: Object.values(Output),
        default: Output.Yaml,
        describe: "The config format",
    },
    url: {
        alias: "u",
        default: "http://localhost",
        describe: "The url to use for application or service",
        string: true,
    },
};

import { app } from "electron";
import ipc from "node-ipc";
import { nanoid } from "nanoid";
import { IIpcExternalMain } from "./iIpcExternalMain";
import { IIpcExternalResult } from "./iIpcExternalResult";

export class NodeIpcExternalMain implements IIpcExternalMain {
    private readonly appSpace = "com.reactivemarkets";
    private readonly connectId = "external_ipc";

    public broadcast<T>(channel: string, data: T) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ipc.server.broadcast(channel, data);
    }

    public handle(channel: string, listener: (args?: any) => Promise<any> | any): void {
        ipc.server.on(channel, async (data, socket) => {
            const { responseId } = data;
            const result: IIpcExternalResult = {};
            try {
                result.result = await listener(data);
            } catch (error) {
                result.error = error.message;
            }
            ipc.server.emit(socket, responseId, result);
        });
    }

    public on<T, TResponse>(channel: string, listener: (sender: any, data: T) => void) {
        ipc.server.on(channel, (data, socket) => {
            const { responseId } = data;
            const sender = {
                id: socket.id,
                emit: (response: TResponse) => {
                    ipc.server.emit(socket, responseId, response);
                },
            };
            listener(sender, data);
        });
    }

    public onSocketDisconnect(listener: (id: string) => void) {
        ipc.server.on("socket.disconnected", (__, id) => {
            listener(id);
        });
    }

    public whenReady(context?: string) {
        return new Promise<void>((resolve) => {
            const appName = app.name.toLowerCase();
            const appSpace = `${this.appSpace}.${appName}.`;
            ipc.config.appspace = context === undefined ? appSpace : `${appSpace}${context}.`;
            ipc.config.id = this.connectId;
            ipc.config.silent = true;
            ipc.serve(() => {
                ipc.server.on("connect", (socket) => {
                    socket.id = nanoid();
                });

                resolve();
            });
            ipc.server.start();
        });
    }
}

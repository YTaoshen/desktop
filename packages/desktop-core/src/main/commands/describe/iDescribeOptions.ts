import { Output } from "../../configuration";

export interface IDescribeOptions {
    readonly context?: string;
    readonly output: Output;
    readonly uid: string;
}

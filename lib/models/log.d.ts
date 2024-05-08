import { LogValue } from '../schema';
export declare class Log {
    private id;
    private data;
    constructor(id: string, data: LogValue);
    get text(): string;
}

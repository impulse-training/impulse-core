import { LogValue } from '../schema';
export declare class Log {
    private id;
    private data;
    constructor(id: string, data: LogValue);
    get text(): string;
    get selectedPattern(): import("../schema").PatternValue;
}
export declare function formatPattern(pattern: {
    emoji?: string;
    name: string;
}): string;
export declare const tagSymbol: typeof formatPattern;
export declare function initials(str: string): string;

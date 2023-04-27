import { LogValue } from '../schema';
export declare class Log {
    private id;
    private data;
    constructor(id: string, data: LogValue);
    get text(): string;
    get selectedPatterns(): import("../schema").PatternValue[];
}
export declare function tagSymbol(tag: {
    emoji?: string;
    name: string;
}): string;
export declare function initials(str: string): string;

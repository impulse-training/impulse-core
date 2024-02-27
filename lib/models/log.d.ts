import { LogValue } from '../schema';
export declare class Log {
    private id;
    private data;
    constructor(id: string, data: LogValue);
    get text(): string | undefined;
    get selectedPattern(): {
        updatedAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        createdAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        supportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
        notification?: {
            title: string;
            body: string;
        } | null | undefined;
        setbackTacticId?: import("yup").Maybe<string | undefined>;
        issueId?: import("yup").Maybe<string | undefined>;
        uid: string;
        name: string;
        ordinal: number;
        setbackThreshold: number;
        sendWeeklyReports: NonNullable<boolean | undefined>;
    };
}
export declare function formatPattern(pattern?: {
    emoji?: string;
    name: string;
}): string | undefined;
export declare const tagSymbol: typeof formatPattern;
export declare function initials(str: string): string;

import { LogValue } from '../schema';
export declare class Log {
    private id;
    private data;
    constructor(id: string, data: LogValue);
    get text(): string | undefined;
    get selectedPattern(): {
        issueId?: import("yup").Maybe<string | undefined>;
        customUnit?: string | undefined;
        supportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
        notification?: {
            title: string;
            body: string;
        } | null | undefined;
        gameplanId?: import("yup").Maybe<string | undefined>;
        successGameplanId?: import("yup").Maybe<string | undefined>;
        setbackGameplanId?: import("yup").Maybe<string | undefined>;
        uid: string;
        ordinal: number;
        createdAt: {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        updatedAt: {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        name: string;
        unit: NonNullable<"time" | "custom" | undefined>;
        sendWeeklyReports: NonNullable<boolean | undefined>;
        setbackThreshold: number;
    };
}
export declare function formatPattern(pattern?: {
    emoji?: string;
    name: string;
}): string | undefined;
export declare const tagSymbol: typeof formatPattern;
export declare function initials(str: string): string;

import { LogValue } from '../schema';
export declare class Log {
    private id;
    private data;
    constructor(id: string, data: LogValue);
    get text(): string | undefined;
    get selectedPattern(): {
        createdAt?: import("..").TimestampLike | import("yup").Maybe<null>;
        updatedAt?: import("..").TimestampLike | import("yup").Maybe<null>;
        parentIssueIds?: string[] | undefined;
        supportGroupIds?: string[] | undefined;
        notification?: import("yup").Maybe<{} | undefined> | {
            title: string;
            body: string;
        };
        setbackTacticId?: import("yup").Maybe<string | undefined>;
        setbackThreshold?: import("yup").Maybe<number | undefined>;
        issueId?: import("yup").Maybe<string | undefined>;
        sendWeeklyReports?: import("yup").Maybe<boolean | undefined>;
        uid: string;
        name: string;
        ordinal: number;
    };
}
export declare function formatPattern(pattern?: {
    emoji?: string;
    name: string;
}): string | undefined;

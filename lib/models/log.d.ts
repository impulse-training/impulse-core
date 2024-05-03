import { LogValue } from '../schema';
export declare class Log {
    private id;
    private data;
    constructor(id: string, data: LogValue);
    get text(): string | undefined;
    get selectedPattern(): {
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        supportGroupIds?: string[] | undefined;
        notification?: {
            title: string;
            body: string;
        } | import("yup").Maybe<{} | undefined>;
        debriefAfterMinutes?: import("yup").Maybe<number | undefined>;
        measureTacticId?: import("yup").Maybe<string | undefined>;
        measureCallToAction?: import("yup").Maybe<string | undefined>;
        issueId?: import("yup").Maybe<string | undefined>;
        parentIssueIds?: string[] | undefined;
        sendWeeklyReports?: import("yup").Maybe<boolean | undefined>;
        profileId: string;
        name: string;
        ordinal: number;
    };
}
export declare function formatPattern(pattern?: {
    emoji?: string;
    name: string;
}): string | undefined;

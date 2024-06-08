import * as yup from 'yup';
import { TimestampLike } from '../utils/firestore/TimestampLike';
import { TacticsById } from './tactic';
export declare const questionSchema: yup.ObjectSchema<{
    prompt: string | undefined;
    type: NonNullable<"time" | "slider" | "counter" | undefined>;
    response: number | undefined;
}, yup.AnyObject, {
    prompt: undefined;
    type: undefined;
    response: undefined;
}, "">;
export type QuestionValue = yup.InferType<typeof questionSchema>;
export declare const tacticDataSchema: yup.ObjectSchema<{
    value: number | undefined;
    unit: NonNullable<"time" | "custom" | "impulse" | undefined>;
    customUnit: string | undefined;
    optionId: string | null | undefined;
    optionLabel: string | undefined;
    optionColor: string | undefined;
    optionTextColor: string | undefined;
    isCompleted: boolean | undefined;
    nextStrategiesPath: string | undefined;
    formattedValue: string;
    lowEmoji: yup.Maybe<string | undefined>;
    highEmoji: yup.Maybe<string | undefined>;
}, yup.AnyObject, {
    value: undefined;
    unit: undefined;
    customUnit: undefined;
    optionId: undefined;
    optionLabel: undefined;
    optionColor: undefined;
    optionTextColor: undefined;
    isCompleted: undefined;
    nextStrategiesPath: undefined;
    formattedValue: undefined;
    lowEmoji: undefined;
    highEmoji: undefined;
}, "">;
export type TacticData = yup.InferType<typeof tacticDataSchema>;
export type BaseLogValue = WithTypes<typeof baseLogSchema>;
declare const baseLogSchema: yup.ObjectSchema<{
    profileId: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    timezone: string;
    issueId: string | null | undefined;
    folders: {
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
        slug?: string | undefined;
        creatorProfileId?: string | undefined;
        last3TacticPreviews?: {
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            type: NonNullable<import(".").QuestionKeyType | "audio" | "breathe" | "day-review" | "emotions" | "phone" | import("./tactic/recap/recapKeyType").RecapKeyType | "steps" | "task" | "urge-surfing" | "video" | undefined>;
            title: string;
        }[] | undefined;
        defaultFor?: "trackTactics" | "debriefTactics" | "reflectionTactics" | undefined;
        recommendedFor?: "time" | "impulse" | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        name: string;
        invitationCode: string;
        invitationUrl: string;
        tacticPreviewsById: {
            [x: string]: {
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                type: NonNullable<import(".").QuestionKeyType | "audio" | "breathe" | "day-review" | "emotions" | "phone" | import("./tactic/recap/recapKeyType").RecapKeyType | "steps" | "task" | "urge-surfing" | "video" | undefined>;
                title: string;
            };
        };
    }[];
    parentIssueIds: string[] | undefined;
    tacticIds: string[];
    tacticsById: {
        tactic?: any;
        path: string;
        id: string;
    };
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            value?: number | undefined;
            customUnit?: string | undefined;
            optionId?: string | null | undefined;
            optionLabel?: string | undefined;
            optionColor?: string | undefined;
            optionTextColor?: string | undefined;
            isCompleted?: boolean | undefined;
            nextStrategiesPath?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            unit: NonNullable<"time" | "custom" | "impulse" | undefined>;
            formattedValue: string;
        };
    };
}, yup.AnyObject, {
    profileId: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    timezone: undefined;
    issueId: undefined;
    folders: "";
    parentIssueIds: "";
    tacticIds: "";
    tacticsById: {
        id: undefined;
        path: undefined;
        tactic: any;
    };
    tacticLikes: undefined;
    tacticData: undefined;
}, "">;
type WithTypes<T extends yup.ISchema<unknown>> = Omit<yup.InferType<T>, 'createdAt' | 'updatedAt' | 'startTime' | 'tacticsById'> & {
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    startTime: TimestampLike;
    tacticsById: TacticsById;
};
export type ImpulseLogValue = WithTypes<typeof impulseLogSchema>;
export declare function logIsImpulseLog(log: LogValue): log is ImpulseLogValue;
declare const impulseLogSchema: yup.ObjectSchema<{
    profileId: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    timezone: string;
    issueId: string | null | undefined;
    folders: {
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
        slug?: string | undefined;
        creatorProfileId?: string | undefined;
        last3TacticPreviews?: {
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            type: NonNullable<import(".").QuestionKeyType | "audio" | "breathe" | "day-review" | "emotions" | "phone" | import("./tactic/recap/recapKeyType").RecapKeyType | "steps" | "task" | "urge-surfing" | "video" | undefined>;
            title: string;
        }[] | undefined;
        defaultFor?: "trackTactics" | "debriefTactics" | "reflectionTactics" | undefined;
        recommendedFor?: "time" | "impulse" | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        name: string;
        invitationCode: string;
        invitationUrl: string;
        tacticPreviewsById: {
            [x: string]: {
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                type: NonNullable<import(".").QuestionKeyType | "audio" | "breathe" | "day-review" | "emotions" | "phone" | import("./tactic/recap/recapKeyType").RecapKeyType | "steps" | "task" | "urge-surfing" | "video" | undefined>;
                title: string;
            };
        };
    }[];
    parentIssueIds: string[] | undefined;
    tacticIds: string[];
    tacticsById: {
        tactic?: any;
        path: string;
        id: string;
    };
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            value?: number | undefined;
            customUnit?: string | undefined;
            optionId?: string | null | undefined;
            optionLabel?: string | undefined;
            optionColor?: string | undefined;
            optionTextColor?: string | undefined;
            isCompleted?: boolean | undefined;
            nextStrategiesPath?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            unit: NonNullable<"time" | "custom" | "impulse" | undefined>;
            formattedValue: string;
        };
    };
} & {
    type: "impulse";
    debriefAfter: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    debriefReminderSentAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    debriefedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
}, yup.AnyObject, {
    profileId: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    timezone: undefined;
    issueId: undefined;
    folders: "";
    parentIssueIds: "";
    tacticIds: "";
    tacticsById: {
        id: undefined;
        path: undefined;
        tactic: any;
    };
    tacticLikes: undefined;
    tacticData: undefined;
    type: undefined;
    debriefAfter: undefined;
    debriefReminderSentAt: undefined;
    debriefedAt: undefined;
}, "">;
export type LocationLogValue = WithTypes<typeof locationLogSchema>;
export declare function logIsLocationLog(log: LogValue): log is LocationLogValue;
declare const locationLogSchema: yup.ObjectSchema<{
    profileId: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    timezone: string;
    issueId: string | null | undefined;
    folders: {
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
        slug?: string | undefined;
        creatorProfileId?: string | undefined;
        last3TacticPreviews?: {
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            type: NonNullable<import(".").QuestionKeyType | "audio" | "breathe" | "day-review" | "emotions" | "phone" | import("./tactic/recap/recapKeyType").RecapKeyType | "steps" | "task" | "urge-surfing" | "video" | undefined>;
            title: string;
        }[] | undefined;
        defaultFor?: "trackTactics" | "debriefTactics" | "reflectionTactics" | undefined;
        recommendedFor?: "time" | "impulse" | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        name: string;
        invitationCode: string;
        invitationUrl: string;
        tacticPreviewsById: {
            [x: string]: {
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                type: NonNullable<import(".").QuestionKeyType | "audio" | "breathe" | "day-review" | "emotions" | "phone" | import("./tactic/recap/recapKeyType").RecapKeyType | "steps" | "task" | "urge-surfing" | "video" | undefined>;
                title: string;
            };
        };
    }[];
    parentIssueIds: string[] | undefined;
    tacticIds: string[];
    tacticsById: {
        tactic?: any;
        path: string;
        id: string;
    };
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            value?: number | undefined;
            customUnit?: string | undefined;
            optionId?: string | null | undefined;
            optionLabel?: string | undefined;
            optionColor?: string | undefined;
            optionTextColor?: string | undefined;
            isCompleted?: boolean | undefined;
            nextStrategiesPath?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            unit: NonNullable<"time" | "custom" | "impulse" | undefined>;
            formattedValue: string;
        };
    };
} & {
    type: "location";
    locationId: string;
    isDisplayable: NonNullable<boolean | undefined>;
    locationName: string;
    locationMode: {};
}, yup.AnyObject, {
    profileId: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    timezone: undefined;
    issueId: undefined;
    folders: "";
    parentIssueIds: "";
    tacticIds: "";
    tacticsById: {
        id: undefined;
        path: undefined;
        tactic: any;
    };
    tacticLikes: undefined;
    tacticData: undefined;
    type: undefined;
    locationId: undefined;
    isDisplayable: undefined;
    locationName: undefined;
    locationMode: undefined;
}, "">;
export type TimeLogValue = WithTypes<typeof timeLogSchema>;
export declare function logIsTimeLog(log: LogValue): log is TimeLogValue;
declare const timeLogSchema: yup.ObjectSchema<{
    profileId: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    timezone: string;
    issueId: string | null | undefined;
    folders: {
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
        slug?: string | undefined;
        creatorProfileId?: string | undefined;
        last3TacticPreviews?: {
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            type: NonNullable<import(".").QuestionKeyType | "audio" | "breathe" | "day-review" | "emotions" | "phone" | import("./tactic/recap/recapKeyType").RecapKeyType | "steps" | "task" | "urge-surfing" | "video" | undefined>;
            title: string;
        }[] | undefined;
        defaultFor?: "trackTactics" | "debriefTactics" | "reflectionTactics" | undefined;
        recommendedFor?: "time" | "impulse" | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        name: string;
        invitationCode: string;
        invitationUrl: string;
        tacticPreviewsById: {
            [x: string]: {
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                type: NonNullable<import(".").QuestionKeyType | "audio" | "breathe" | "day-review" | "emotions" | "phone" | import("./tactic/recap/recapKeyType").RecapKeyType | "steps" | "task" | "urge-surfing" | "video" | undefined>;
                title: string;
            };
        };
    }[];
    parentIssueIds: string[] | undefined;
    tacticIds: string[];
    tacticsById: {
        tactic?: any;
        path: string;
        id: string;
    };
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            value?: number | undefined;
            customUnit?: string | undefined;
            optionId?: string | null | undefined;
            optionLabel?: string | undefined;
            optionColor?: string | undefined;
            optionTextColor?: string | undefined;
            isCompleted?: boolean | undefined;
            nextStrategiesPath?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            unit: NonNullable<"time" | "custom" | "impulse" | undefined>;
            formattedValue: string;
        };
    };
} & {
    type: "time";
}, yup.AnyObject, {
    profileId: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    timezone: undefined;
    issueId: undefined;
    folders: "";
    parentIssueIds: "";
    tacticIds: "";
    tacticsById: {
        id: undefined;
        path: undefined;
        tactic: any;
    };
    tacticLikes: undefined;
    tacticData: undefined;
    type: undefined;
}, "">;
export declare const logSchema: yup.Lazy<{
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
    issueId?: string | null | undefined;
    parentIssueIds?: string[] | undefined;
    tacticLikes?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    debriefAfter?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    debriefReminderSentAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    debriefedAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    profileId: string;
    type: "impulse";
    tacticsById: {
        tactic?: any;
        path: string;
        id: string;
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    timezone: string;
    folders: {
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
        slug?: string | undefined;
        creatorProfileId?: string | undefined;
        last3TacticPreviews?: {
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            type: NonNullable<import(".").QuestionKeyType | "audio" | "breathe" | "day-review" | "emotions" | "phone" | import("./tactic/recap/recapKeyType").RecapKeyType | "steps" | "task" | "urge-surfing" | "video" | undefined>;
            title: string;
        }[] | undefined;
        defaultFor?: "trackTactics" | "debriefTactics" | "reflectionTactics" | undefined;
        recommendedFor?: "time" | "impulse" | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        name: string;
        invitationCode: string;
        invitationUrl: string;
        tacticPreviewsById: {
            [x: string]: {
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                type: NonNullable<import(".").QuestionKeyType | "audio" | "breathe" | "day-review" | "emotions" | "phone" | import("./tactic/recap/recapKeyType").RecapKeyType | "steps" | "task" | "urge-surfing" | "video" | undefined>;
                title: string;
            };
        };
    }[];
    tacticIds: string[];
    tacticData: {
        [x: string]: {
            value?: number | undefined;
            customUnit?: string | undefined;
            optionId?: string | null | undefined;
            optionLabel?: string | undefined;
            optionColor?: string | undefined;
            optionTextColor?: string | undefined;
            isCompleted?: boolean | undefined;
            nextStrategiesPath?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            unit: NonNullable<"time" | "custom" | "impulse" | undefined>;
            formattedValue: string;
        };
    };
} | {
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
    issueId?: string | null | undefined;
    parentIssueIds?: string[] | undefined;
    tacticLikes?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    profileId: string;
    type: "location";
    tacticsById: {
        tactic?: any;
        path: string;
        id: string;
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    timezone: string;
    folders: {
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
        slug?: string | undefined;
        creatorProfileId?: string | undefined;
        last3TacticPreviews?: {
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            type: NonNullable<import(".").QuestionKeyType | "audio" | "breathe" | "day-review" | "emotions" | "phone" | import("./tactic/recap/recapKeyType").RecapKeyType | "steps" | "task" | "urge-surfing" | "video" | undefined>;
            title: string;
        }[] | undefined;
        defaultFor?: "trackTactics" | "debriefTactics" | "reflectionTactics" | undefined;
        recommendedFor?: "time" | "impulse" | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        name: string;
        invitationCode: string;
        invitationUrl: string;
        tacticPreviewsById: {
            [x: string]: {
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                type: NonNullable<import(".").QuestionKeyType | "audio" | "breathe" | "day-review" | "emotions" | "phone" | import("./tactic/recap/recapKeyType").RecapKeyType | "steps" | "task" | "urge-surfing" | "video" | undefined>;
                title: string;
            };
        };
    }[];
    tacticIds: string[];
    tacticData: {
        [x: string]: {
            value?: number | undefined;
            customUnit?: string | undefined;
            optionId?: string | null | undefined;
            optionLabel?: string | undefined;
            optionColor?: string | undefined;
            optionTextColor?: string | undefined;
            isCompleted?: boolean | undefined;
            nextStrategiesPath?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            unit: NonNullable<"time" | "custom" | "impulse" | undefined>;
            formattedValue: string;
        };
    };
    locationId: string;
    isDisplayable: NonNullable<boolean | undefined>;
    locationName: string;
    locationMode: {};
} | {
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
    issueId?: string | null | undefined;
    parentIssueIds?: string[] | undefined;
    tacticLikes?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    profileId: string;
    type: "time";
    tacticsById: {
        tactic?: any;
        path: string;
        id: string;
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    timezone: string;
    folders: {
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
        slug?: string | undefined;
        creatorProfileId?: string | undefined;
        last3TacticPreviews?: {
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            type: NonNullable<import(".").QuestionKeyType | "audio" | "breathe" | "day-review" | "emotions" | "phone" | import("./tactic/recap/recapKeyType").RecapKeyType | "steps" | "task" | "urge-surfing" | "video" | undefined>;
            title: string;
        }[] | undefined;
        defaultFor?: "trackTactics" | "debriefTactics" | "reflectionTactics" | undefined;
        recommendedFor?: "time" | "impulse" | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        name: string;
        invitationCode: string;
        invitationUrl: string;
        tacticPreviewsById: {
            [x: string]: {
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                type: NonNullable<import(".").QuestionKeyType | "audio" | "breathe" | "day-review" | "emotions" | "phone" | import("./tactic/recap/recapKeyType").RecapKeyType | "steps" | "task" | "urge-surfing" | "video" | undefined>;
                title: string;
            };
        };
    }[];
    tacticIds: string[];
    tacticData: {
        [x: string]: {
            value?: number | undefined;
            customUnit?: string | undefined;
            optionId?: string | null | undefined;
            optionLabel?: string | undefined;
            optionColor?: string | undefined;
            optionTextColor?: string | undefined;
            isCompleted?: boolean | undefined;
            nextStrategiesPath?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            unit: NonNullable<"time" | "custom" | "impulse" | undefined>;
            formattedValue: string;
        };
    };
}, yup.AnyObject, any>;
export type LogValue = ImpulseLogValue | LocationLogValue | TimeLogValue;
export {};

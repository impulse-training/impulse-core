import * as yup from 'yup';
import { TacticsById } from './strategy/tactic';
export declare const tacticDataSchema: yup.ObjectSchema<{
    value: number | undefined;
    unit: NonNullable<"text" | "time" | "custom" | undefined>;
    setAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    customUnit: string | undefined;
    optionId: string | null | undefined;
    optionLabel: string | undefined;
    optionColor: string | undefined;
    optionTextColor: string | undefined;
    isCompleted: boolean | undefined;
    formattedValue: string;
}, yup.AnyObject, {
    value: undefined;
    unit: undefined;
    setAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    customUnit: undefined;
    optionId: undefined;
    optionLabel: undefined;
    optionColor: undefined;
    optionTextColor: undefined;
    isCompleted: undefined;
    formattedValue: undefined;
}, "">;
export type TacticData = yup.InferType<typeof tacticDataSchema>;
declare const messageSchema: yup.ObjectSchema<{
    content: string;
    role: "system" | "user" | "assistant" | undefined;
}, yup.AnyObject, {
    content: undefined;
    role: undefined;
}, "">;
export type MessageValue = yup.InferType<typeof messageSchema>;
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
    parentIssueIds: string[] | undefined;
    encryptedPhoneNumber: string | undefined;
    messages: {
        role?: "system" | "user" | "assistant" | undefined;
        content: string;
    }[] | undefined;
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
            setAt: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            unit: NonNullable<"text" | "time" | "custom" | undefined>;
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
    parentIssueIds: "";
    encryptedPhoneNumber: undefined;
    messages: "";
    tacticIds: "";
    tacticsById: {
        id: undefined;
        path: undefined;
        tactic: any;
    };
    tacticLikes: undefined;
    tacticData: undefined;
}, "">;
type WithTypes<T extends yup.ISchema<unknown>> = Omit<yup.InferType<T>, 'tacticsById'> & {
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
    parentIssueIds: string[] | undefined;
    encryptedPhoneNumber: string | undefined;
    messages: {
        role?: "system" | "user" | "assistant" | undefined;
        content: string;
    }[] | undefined;
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
            setAt: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            unit: NonNullable<"text" | "time" | "custom" | undefined>;
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
    parentIssueIds: "";
    encryptedPhoneNumber: undefined;
    messages: "";
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
    parentIssueIds: string[] | undefined;
    encryptedPhoneNumber: string | undefined;
    messages: {
        role?: "system" | "user" | "assistant" | undefined;
        content: string;
    }[] | undefined;
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
            setAt: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            unit: NonNullable<"text" | "time" | "custom" | undefined>;
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
    parentIssueIds: "";
    encryptedPhoneNumber: undefined;
    messages: "";
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
    parentIssueIds: string[] | undefined;
    encryptedPhoneNumber: string | undefined;
    messages: {
        role?: "system" | "user" | "assistant" | undefined;
        content: string;
    }[] | undefined;
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
            setAt: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            unit: NonNullable<"text" | "time" | "custom" | undefined>;
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
    parentIssueIds: "";
    encryptedPhoneNumber: undefined;
    messages: "";
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
    encryptedPhoneNumber?: string | undefined;
    messages?: {
        role?: "system" | "user" | "assistant" | undefined;
        content: string;
    }[] | undefined;
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
            setAt: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            unit: NonNullable<"text" | "time" | "custom" | undefined>;
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
    encryptedPhoneNumber?: string | undefined;
    messages?: {
        role?: "system" | "user" | "assistant" | undefined;
        content: string;
    }[] | undefined;
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
            setAt: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            unit: NonNullable<"text" | "time" | "custom" | undefined>;
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
    encryptedPhoneNumber?: string | undefined;
    messages?: {
        role?: "system" | "user" | "assistant" | undefined;
        content: string;
    }[] | undefined;
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
            setAt: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            unit: NonNullable<"text" | "time" | "custom" | undefined>;
            formattedValue: string;
        };
    };
}, yup.AnyObject, any>;
export type LogValue = ImpulseLogValue | LocationLogValue | TimeLogValue;
export {};

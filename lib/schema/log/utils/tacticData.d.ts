import * as yup from 'yup';
import { TacticValue } from '../../tactic';
import { DocumentReferenceLike } from '../../utils/firestore';
export declare const tacticDataSchema: yup.ObjectSchema<{
    isCompleted: NonNullable<boolean | undefined>;
    setAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
}, yup.AnyObject, {
    isCompleted: undefined;
    setAt: {
        seconds: undefined;
        nanoseconds: undefined;
        isEqual: undefined;
        toMillis: undefined;
        toDate: undefined;
    };
}, "">;
export type TacticDataValue = yup.InferType<typeof tacticDataSchema>;
export declare const tacticAndMetadata: yup.ObjectSchema<{
    doc: DocumentReferenceLike<unknown>;
    tactic: {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        audio?: {
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            metadata?: {} | null | undefined;
            thumbnailStoragePath?: yup.Maybe<string | undefined>;
            thumbnailUri?: yup.Maybe<string | undefined>;
            storagePath: string;
            url: string;
        } | null | undefined;
        uid?: string | undefined;
        prompt?: string | undefined;
        description?: string | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            metadata?: {} | null | undefined;
            thumbnailStoragePath?: yup.Maybe<string | undefined>;
            thumbnailUri?: yup.Maybe<string | undefined>;
            storagePath: string;
            url: string;
        } | undefined;
        backgroundColor?: string | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        type: "audio";
    } | {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        uid?: string | undefined;
        prompt?: string | undefined;
        description?: string | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            metadata?: {} | null | undefined;
            thumbnailStoragePath?: yup.Maybe<string | undefined>;
            thumbnailUri?: yup.Maybe<string | undefined>;
            storagePath: string;
            url: string;
        } | undefined;
        backgroundColor?: string | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        repeat?: yup.Maybe<number | undefined>;
        type: "breathingExercise";
        inFor: number;
        holdFor: number;
        outFor: number;
    } | {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        uid?: string | undefined;
        prompt?: string | undefined;
        description?: string | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            metadata?: {} | null | undefined;
            thumbnailStoragePath?: yup.Maybe<string | undefined>;
            thumbnailUri?: yup.Maybe<string | undefined>;
            storagePath: string;
            url: string;
        } | undefined;
        backgroundColor?: string | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        type: "steps";
        targetSteps: number;
    } | {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        uid?: string | undefined;
        description?: string | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            metadata?: {} | null | undefined;
            thumbnailStoragePath?: yup.Maybe<string | undefined>;
            thumbnailUri?: yup.Maybe<string | undefined>;
            storagePath: string;
            url: string;
        } | undefined;
        backgroundColor?: string | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        prompt: string;
        type: "affirmation";
    } | {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        uid?: string | undefined;
        description?: string | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            metadata?: {} | null | undefined;
            thumbnailStoragePath?: yup.Maybe<string | undefined>;
            thumbnailUri?: yup.Maybe<string | undefined>;
            storagePath: string;
            url: string;
        } | undefined;
        backgroundColor?: string | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        prompt: string;
        type: "task";
    } | {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        uid?: string | undefined;
        prompt?: string | undefined;
        description?: string | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            metadata?: {} | null | undefined;
            thumbnailStoragePath?: yup.Maybe<string | undefined>;
            thumbnailUri?: yup.Maybe<string | undefined>;
            storagePath: string;
            url: string;
        } | undefined;
        backgroundColor?: string | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        type: "video";
        video: {
            storagePath?: string | null | undefined;
            url?: string | null | undefined;
        };
    } | {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        uid?: string | undefined;
        prompt?: string | undefined;
        description?: string | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            metadata?: {} | null | undefined;
            thumbnailStoragePath?: yup.Maybe<string | undefined>;
            thumbnailUri?: yup.Maybe<string | undefined>;
            storagePath: string;
            url: string;
        } | undefined;
        backgroundColor?: string | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        type: "supportGroup";
        supportGroup: DocumentReferenceLike<unknown>;
    } | {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        uid?: string | undefined;
        prompt?: string | undefined;
        description?: string | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            metadata?: {} | null | undefined;
            thumbnailStoragePath?: yup.Maybe<string | undefined>;
            thumbnailUri?: yup.Maybe<string | undefined>;
            storagePath: string;
            url: string;
        } | undefined;
        backgroundColor?: string | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        url: string;
        type: "link";
    };
    data: {
        setAt: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        isCompleted: NonNullable<boolean | undefined>;
    } | undefined;
}, yup.AnyObject, {
    doc: undefined;
    tactic: undefined;
    data: undefined;
}, "">;
export declare const tacticsById: yup.Lazy<{
    [x: string]: {
        data?: {
            setAt: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            isCompleted: NonNullable<boolean | undefined>;
        } | undefined;
        tactic: {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            audio?: {
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                storagePath: string;
                url: string;
            } | null | undefined;
            uid?: string | undefined;
            prompt?: string | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                storagePath: string;
                url: string;
            } | undefined;
            backgroundColor?: string | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            type: "audio";
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            uid?: string | undefined;
            prompt?: string | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                storagePath: string;
                url: string;
            } | undefined;
            backgroundColor?: string | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            repeat?: yup.Maybe<number | undefined>;
            type: "breathingExercise";
            inFor: number;
            holdFor: number;
            outFor: number;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            uid?: string | undefined;
            prompt?: string | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                storagePath: string;
                url: string;
            } | undefined;
            backgroundColor?: string | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            type: "steps";
            targetSteps: number;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            uid?: string | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                storagePath: string;
                url: string;
            } | undefined;
            backgroundColor?: string | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            prompt: string;
            type: "affirmation";
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            uid?: string | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                storagePath: string;
                url: string;
            } | undefined;
            backgroundColor?: string | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            prompt: string;
            type: "task";
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            uid?: string | undefined;
            prompt?: string | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                storagePath: string;
                url: string;
            } | undefined;
            backgroundColor?: string | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            type: "video";
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
            };
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            uid?: string | undefined;
            prompt?: string | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                storagePath: string;
                url: string;
            } | undefined;
            backgroundColor?: string | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            type: "supportGroup";
            supportGroup: DocumentReferenceLike<unknown>;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            uid?: string | undefined;
            prompt?: string | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                storagePath: string;
                url: string;
            } | undefined;
            backgroundColor?: string | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            url: string;
            type: "link";
        };
        doc: DocumentReferenceLike<unknown>;
    };
}, yup.AnyObject, any>;
export type TacticsById = Record<string, {
    doc: DocumentReferenceLike<TacticValue>;
    tactic: TacticValue;
    data?: TacticDataValue;
}>;
export type WithTacticsById<T> = Omit<T, 'tacticsById'> & {
    tacticsById: TacticsById;
};

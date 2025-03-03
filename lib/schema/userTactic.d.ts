import * as yup from 'yup';
export declare const userTacticSchema: yup.ObjectSchema<{
    tactic: {
        doc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
            type: "notifyASupportPerson";
            contactIds: string[];
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
            audio?: {
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                metadata?: {} | null | undefined;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                storagePath: string;
                url: string;
            } | null | undefined;
            prompt: string;
            type: "basic";
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
            type: "notifySupportGroup";
            supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
            type: "link";
            url: string;
        };
    };
    allBehaviors: NonNullable<boolean | undefined>;
    behaviorDocs: import("./utils/firestore").DocumentReferenceLike<unknown>[];
    routineDocs: import("./utils/firestore").DocumentReferenceLike<unknown>[];
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
}, yup.AnyObject, {
    tactic: {
        tactic: undefined;
        doc: undefined;
    };
    allBehaviors: undefined;
    behaviorDocs: "";
    routineDocs: "";
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type UserTacticValue = yup.InferType<typeof userTacticSchema>;

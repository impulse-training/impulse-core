import * as yup from 'yup';
export declare const videoTacticSchema: yup.ObjectSchema<{
    uid: string | undefined;
    prompt: string | undefined;
    description: string | null | undefined;
    type: "video";
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
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        metadata?: {} | null | undefined;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        storagePath: string;
        url: string;
    } | undefined;
    backgroundColor: string | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    video: {
        storagePath?: string | null | undefined;
        url?: string | null | undefined;
    };
}, yup.AnyObject, {
    uid: undefined;
    prompt: undefined;
    description: undefined;
    type: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    image: undefined;
    backgroundColor: undefined;
    timerSeconds: undefined;
    video: {
        url: undefined;
        storagePath: undefined;
    };
}, "">;
export type VideoTacticValue = yup.InferType<typeof videoTacticSchema>;

import * as yup from 'yup';
export declare function tacticBaseSchema<K extends string>(type: K): yup.ObjectSchema<{
    uid: string | undefined;
    prompt: string | undefined;
    description: string | null | undefined;
    type: yup.Defined<K>;
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
}, "">;

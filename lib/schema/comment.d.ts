import * as yup from 'yup';
export declare const commentSchema: yup.ObjectSchema<{
    createdAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    tacticId: string | null | undefined;
    tacticName: string | null | undefined;
    text: string | undefined;
    uid: string;
    authorName: string;
    recording: {
        waveform?: string | null | undefined;
        localFilePath: string;
        remoteFilePath: string;
    } | undefined;
    isEdited: boolean | undefined;
    avatar: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | undefined;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    tacticId: undefined;
    tacticName: undefined;
    text: undefined;
    uid: undefined;
    authorName: undefined;
    recording: {
        localFilePath: undefined;
        remoteFilePath: undefined;
        waveform: undefined;
    };
    isEdited: undefined;
    avatar: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
}, "">;
export type CommentValue = yup.InferType<typeof commentSchema>;

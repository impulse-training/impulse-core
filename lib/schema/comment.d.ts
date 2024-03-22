import * as yup from 'yup';
export declare const commentSchema: yup.ObjectSchema<{
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
    tacticId: string | null | undefined;
    tacticName: string | null | undefined;
    text: string | undefined;
    profileId: string;
    uids: string[];
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
    profileId: undefined;
    uids: "";
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

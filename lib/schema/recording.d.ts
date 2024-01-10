import * as yup from 'yup';
export declare const recordingSchema: yup.ObjectSchema<{
    localFilePath: string;
    remoteFilePath: string;
    waveform: string | null | undefined;
}, yup.AnyObject, {
    localFilePath: undefined;
    remoteFilePath: undefined;
    waveform: undefined;
}, "">;
export type Recording = yup.InferType<typeof recordingSchema>;

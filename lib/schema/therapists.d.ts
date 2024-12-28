import * as yup from 'yup';
export declare const therapistSchema: yup.ObjectSchema<{
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
    name: string;
    email: string;
    practiceType: string;
    clientCount: string | undefined;
    specialties: string | undefined;
    hearAboutUs: string | undefined;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    name: undefined;
    email: undefined;
    practiceType: undefined;
    clientCount: undefined;
    specialties: undefined;
    hearAboutUs: undefined;
}, "">;
export type TherapistValue = yup.InferType<typeof therapistSchema>;

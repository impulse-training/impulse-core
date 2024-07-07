import * as yup from 'yup';
export declare const tacticImpressionSchema: yup.ObjectSchema<{
    profileId: string;
    isLiked: NonNullable<boolean | undefined>;
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
}, yup.AnyObject, {
    profileId: undefined;
    isLiked: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type LikeValue = yup.InferType<typeof tacticImpressionSchema>;

import * as yup from 'yup';
export declare const tacticImpressionSchema: yup.ObjectSchema<{
    profileId: string;
    isLiked: NonNullable<boolean | undefined>;
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
}, yup.AnyObject, {
    profileId: undefined;
    isLiked: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type LikeValue = yup.InferType<typeof tacticImpressionSchema>;

import * as yup from 'yup';
export declare function optionValueBaseSchema<K extends string>(type: K): yup.ObjectSchema<{
    type: yup.Defined<K>;
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
    followUp: ({
        type: "profileData";
        profileKey: string;
        profileValue: {};
    } | {
        type: "question";
        questionId: string;
    }) | undefined;
    text: string;
    color: string | undefined;
    textColor: string | undefined;
    label: string | undefined;
}, yup.AnyObject, {
    type: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    followUp: undefined;
    text: undefined;
    color: undefined;
    textColor: undefined;
    label: undefined;
}, "">;

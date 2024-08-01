import * as yup from 'yup';
export declare function optionValueBaseSchema<K extends string>(type: K): yup.ObjectSchema<{
    type: yup.Defined<K>;
    followUps: ({
        message?: string | undefined;
        type: "askAnotherQuestion";
        questionId: string;
    } | {
        message?: string | undefined;
        type: "showTour";
        steps: {
            title: string;
            message: string;
            elementRefName: string;
            confirmButtonLabel: string;
        }[];
    } | {
        message?: string | undefined;
        type: "writeAnswerToProfile";
        profileKey: string;
    } | {
        message?: string | undefined;
        type: "writeValueToProfile";
        profileKey: string;
        value: {};
    })[] | undefined;
    text: string;
    color: string | undefined;
    textColor: string | undefined;
    label: string | undefined;
}, yup.AnyObject, {
    type: undefined;
    followUps: "";
    text: undefined;
    color: undefined;
    textColor: undefined;
    label: undefined;
}, "">;

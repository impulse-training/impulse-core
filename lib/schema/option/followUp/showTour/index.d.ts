import * as yup from 'yup';
export declare const showTourFollowUpSchema: yup.ObjectSchema<{
    type: "showTour";
    message: string | undefined;
    steps: {
        message: string;
        elementRefName: string;
        title: string;
        confirmButtonLabel: string;
    }[];
}, yup.AnyObject, {
    type: undefined;
    message: undefined;
    steps: "";
}, "">;
export type ShowTourFollowUpValue = yup.InferType<typeof showTourFollowUpSchema>;

import * as yup from 'yup';
export declare const showTourFollowUpSchema: yup.ObjectSchema<{
    type: "showTour";
    message: string | undefined;
    steps: {
        title: string;
        message: string;
        elementRefName: string;
        confirmButtonLabel: string;
    }[];
}, yup.AnyObject, {
    type: undefined;
    message: undefined;
    steps: "";
}, "">;
export type ShowTourFollowUpValue = yup.InferType<typeof showTourFollowUpSchema>;

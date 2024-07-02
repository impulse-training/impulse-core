import * as yup from 'yup';
export declare const followUpQuestionSchema: yup.ObjectSchema<{
    type: "question";
    message: string | undefined;
    questionId: string;
}, yup.AnyObject, {
    type: undefined;
    message: undefined;
    questionId: undefined;
}, "">;
export type FollowUpQuestionValue = yup.InferType<typeof followUpQuestionSchema>;

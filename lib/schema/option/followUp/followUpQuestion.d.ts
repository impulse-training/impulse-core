import * as yup from 'yup';
export declare const followUpQuestionSchema: yup.ObjectSchema<{
    type: "question";
    questionId: string;
}, yup.AnyObject, {
    type: undefined;
    questionId: undefined;
}, "">;
export type FollowUpQuestionValue = yup.InferType<typeof followUpQuestionSchema>;

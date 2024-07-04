import * as yup from 'yup';
export declare const askAnotherQuestionSchema: yup.ObjectSchema<{
    type: "askAnotherQuestion";
    message: string | undefined;
    questionId: string;
}, yup.AnyObject, {
    type: undefined;
    message: undefined;
    questionId: undefined;
}, "">;
export type FollowUpQuestionValue = yup.InferType<typeof askAnotherQuestionSchema>;

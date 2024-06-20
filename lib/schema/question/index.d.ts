import * as yup from 'yup';
import { QuestionCounterValue } from './counter';
import { QuestionMultipleChoiceValue } from './multipleChoice';
import { QuestionScaleOf1To10Value } from './scaleOf1To10';
import { QuestionTextValue } from './text';
import { QuestionTimeValue } from './time';
export * from './counter';
export * from './multipleChoice';
export * from './scaleOf1To10';
export * from './time';
export * from './utils/guards';
export declare const questionSchemas: Record<QuestionValue['type'], yup.ObjectSchema<QuestionValue>>;
export declare const questionSchema: yup.Lazy<ValidatedQuestion, yup.AnyObject, any>;
type ValidatedQuestion = {
    [K in QuestionValue['type']]: yup.InferType<(typeof questionSchemas)[K]>;
}[QuestionValue['type']];
export type QuestionValue = QuestionTextValue | QuestionScaleOf1To10Value | QuestionTimeValue | QuestionCounterValue | QuestionMultipleChoiceValue;

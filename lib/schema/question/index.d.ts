import * as yup from 'yup';
import { QuestionCounterValue } from './counter';
import { QuestionMultipleChoiceValue } from './multipleChoice';
import { QuestionSliderValue } from './slider';
import { QuestionTextValue } from './text';
import { QuestionTimeValue } from './time';
export * from './counter';
export * from './multipleChoice';
export * from './slider';
export * from './time';
export * from './utils/guards';
export declare const questionSchemas: Record<QuestionValue['type'], yup.ObjectSchema<QuestionValue>>;
export declare const questionSchema: yup.Lazy<ValidatedQuestion, yup.AnyObject, any>;
type ValidatedQuestion = {
    [K in QuestionValue['type']]: yup.InferType<(typeof questionSchemas)[K]>;
}[QuestionValue['type']];
export type QuestionValue = QuestionTextValue | QuestionSliderValue | QuestionTimeValue | QuestionCounterValue | QuestionMultipleChoiceValue;

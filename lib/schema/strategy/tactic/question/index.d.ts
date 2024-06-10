import * as yup from 'yup';
import { QuestionCounterTacticValue } from './counter';
import { QuestionMultipleChoiceTacticValue } from './multipleChoice';
import { QuestionSliderTacticValue } from './slider';
import { QuestionTextValue } from './text';
import { QuestionTimeTacticValue } from './time';
export * from './counter';
export * from './multipleChoice';
export * from './slider';
export * from './time';
export declare const questionTacticSchemas: Record<QuestionTacticValue['type'], yup.ObjectSchema<QuestionTacticValue>>;
export declare const questionTacticSchema: yup.Lazy<ValidatedQuestionTactic, yup.AnyObject, any>;
type ValidatedQuestionTactic = {
    [K in QuestionTacticValue['type']]: yup.InferType<(typeof questionTacticSchemas)[K]>;
}[QuestionTacticValue['type']];
export type QuestionTacticValue = QuestionTextValue | QuestionSliderTacticValue | QuestionTimeTacticValue | QuestionCounterTacticValue | QuestionMultipleChoiceTacticValue;
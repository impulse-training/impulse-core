import * as yup from 'yup';
import { TacticData } from '../log';
import { MultipleChoiceOptionValue } from './multipleChoice';
import { CounterOptionValue, TimeOptionValue } from './numeric';
export * from './multipleChoice';
export * from './numeric';
export declare const optionSchemas: Record<OptionValue['type'], yup.ObjectSchema<OptionValue>>;
export declare const optionSchema: yup.Lazy<ValidatedOption, yup.AnyObject, any>;
type ValidatedOption = {
    [K in OptionValue['type']]: yup.InferType<(typeof optionSchemas)[K]>;
}[OptionValue['type']];
export type OptionValue = TimeOptionValue | CounterOptionValue | MultipleChoiceOptionValue;
export declare function optionMatches(option: OptionValue, data: TacticData): boolean | undefined;

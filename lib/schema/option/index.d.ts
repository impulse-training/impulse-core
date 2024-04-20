import * as yup from 'yup';
import { TacticData } from '../log';
import { NumericOptionValue } from './numeric';
import { StringOptionValue } from './string';
export * from './numeric';
export * from './string';
export declare const optionSchemas: Record<OptionValue['type'], yup.ObjectSchema<OptionValue>>;
export declare const optionSchema: yup.Lazy<ValidatedOption, yup.AnyObject, any>;
type ValidatedOption = {
    [K in OptionValue['type']]: yup.InferType<(typeof optionSchemas)[K]>;
}[OptionValue['type']];
export type OptionValue = NumericOptionValue | StringOptionValue;
export declare function optionMatches(option: OptionValue, data: TacticData): boolean | undefined;

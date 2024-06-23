import * as yup from 'yup';
import { ActionRecapLogValue } from './actionRecap';
import { ImpulseLogValue } from './impulseLog';
import { MessageLogValue } from './messageLog';
import { QuestionsLogValue } from './questionsLog';
import { StrategiesLogValue } from './strategiesLog';
export * from './actionRecap';
export * from './impulseLog';
export * from './messageLog';
export * from './questionsLog';
export * from './strategiesLog';
export * from './utils/guards';
export declare const logSchemas: Record<LogValue['type'], yup.ObjectSchema<LogValue>>;
export declare const logSchema: yup.Lazy<ValidatedQuestion, yup.AnyObject, any>;
type ValidatedQuestion = {
    [K in LogValue['type']]: yup.InferType<(typeof logSchemas)[K]>;
}[LogValue['type']];
export type LogValue = ImpulseLogValue | MessageLogValue | QuestionsLogValue | ActionRecapLogValue | StrategiesLogValue;

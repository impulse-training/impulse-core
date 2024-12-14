import * as yup from 'yup';
import { DerivedProfileStrategyValue } from './derived';
import { OriginalProfileStrategyValue } from './original';
export * from './base';
export * from './derived';
export * from './original';
export declare const profileStrategySchemas: Record<ProfileStrategyValue['type'], yup.ObjectSchema<ProfileStrategyValue>>;
export declare const profileStrategySchema: yup.Lazy<ValidatedBehavior, yup.AnyObject, any>;
type ValidatedBehavior = {
    [K in ProfileStrategyValue['type']]: yup.InferType<(typeof profileStrategySchemas)[K]>;
}[ProfileStrategyValue['type']];
export type ProfileStrategyValue = OriginalProfileStrategyValue | DerivedProfileStrategyValue;

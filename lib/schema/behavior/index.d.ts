import * as yup from 'yup';
import { CounterBehaviorValue } from './counter';
import { ScaleOf1To10BehaviorValue } from './scaleOf1To10';
import { TimeBehaviorValue } from './time';
export * from './base';
export * from './counter';
export * from './scaleOf1To10';
export * from './time';
export * from './utils/guards';
export declare const behaviorSchemas: Record<BehaviorValue['type'], yup.ObjectSchema<BehaviorValue>>;
export declare const behaviorSchema: yup.Lazy<ValidatedBehavior, yup.AnyObject, any>;
type ValidatedBehavior = {
    [K in BehaviorValue['type']]: yup.InferType<(typeof behaviorSchemas)[K]>;
}[BehaviorValue['type']];
export type BehaviorValue = ScaleOf1To10BehaviorValue | TimeBehaviorValue | CounterBehaviorValue;
export type BehaviorKeyType = BehaviorValue['type'];

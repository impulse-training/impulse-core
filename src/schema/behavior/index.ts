import * as yup from 'yup';
import { CounterBehaviorValue, counterBehaviorSchema } from './counter';
import {
  ScaleOf1To10BehaviorValue,
  scaleOf1To10BehaviorSchema,
} from './scaleOf1To10';
import { TimeBehaviorValue, timeBehaviorSchema } from './time';

export * from './base';
export * from './counter';
export * from './scaleOf1To10';
export * from './time';
export * from './utils/guards';

export const behaviorSchemas: Record<
  BehaviorValue['type'],
  yup.ObjectSchema<BehaviorValue>
> = {
  time: timeBehaviorSchema,
  counter: counterBehaviorSchema,
  scaleOf1To10: scaleOf1To10BehaviorSchema,
  // multipleChoice: multipleChoiceBehaviorSchema,
} as any;

export const behaviorSchema = yup.lazy(value => {
  if (!value) return yup.mixed().required();

  if (typeof value.type === 'string' && value.type in behaviorSchemas) {
    return behaviorSchemas[value.type as BehaviorValue['type']];
  }

  return yup.object({
    type: yup
      .mixed<BehaviorValue['type']>()
      .oneOf(Object.keys(behaviorSchemas) as BehaviorValue['type'][])
      .required(),
  });
}) as yup.Lazy<ValidatedBehavior>;

// / This type represents the union of all possible validated tactic objects
type ValidatedBehavior = {
  [K in BehaviorValue['type']]: yup.InferType<(typeof behaviorSchemas)[K]>;
}[BehaviorValue['type']];

export type BehaviorValue =
  | ScaleOf1To10BehaviorValue
  | TimeBehaviorValue
  | CounterBehaviorValue;

export type BehaviorKeyType = BehaviorValue['type'];

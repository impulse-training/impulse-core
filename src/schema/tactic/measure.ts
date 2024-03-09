import * as yup from 'yup';
import { tacticValueBaseSchema } from './base';

export const measureSliderTacticSchema = tacticValueBaseSchema(
  'measure-slider'
).shape({
  lowEmoji: yup.string().notRequired(),
  highEmoji: yup.string().notRequired(),
});

export type MeasureSliderTacticValue = yup.InferType<
  typeof measureSliderTacticSchema
>;

export const measureTimeTacticSchema = tacticValueBaseSchema('measure-time');
export type MeasureTimeTacticValue = yup.InferType<
  typeof measureTimeTacticSchema
>;

export const measureCounterTacticSchema =
  tacticValueBaseSchema('measure-counter');
export type MeasureCounterTacticValue = yup.InferType<
  typeof measureCounterTacticSchema
>;

export const measureTacticSchemas: Record<
  MeasureTacticValue['type'],
  yup.ObjectSchema<MeasureTacticValue>
> = {
  'measure-time': measureTimeTacticSchema,
  'measure-slider': measureSliderTacticSchema,
  'measure-counter': measureCounterTacticSchema,
} as any;

export const measureTacticSchema = yup.lazy(value => {
  if (typeof value.type === 'string' && value.type in measureTacticSchemas) {
    return measureTacticSchemas[value.type as MeasureTacticValue['type']];
  }

  return yup.object({
    type: yup
      .mixed<MeasureTacticValue['type']>()
      .oneOf(Object.keys(measureTacticSchemas) as MeasureTacticValue['type'][])
      .required(),
  });
}) as yup.Lazy<ValidatedMeasureTactic>;

// / This type represents the union of all possible validated tactic objects
type ValidatedMeasureTactic = {
  [K in MeasureTacticValue['type']]: yup.InferType<
    (typeof measureTacticSchemas)[K]
  >;
}[MeasureTacticValue['type']];

export type MeasureTacticValue =
  | MeasureSliderTacticValue
  | MeasureTimeTacticValue
  | MeasureCounterTacticValue;

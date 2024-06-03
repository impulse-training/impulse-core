import * as yup from 'yup';
import { RecapActionTacticValue, recapActionTacticSchema } from './recapAction';
import {
  RecapTrackingTacticValue,
  recapTrackingTacticSchema,
} from './recapTracking';

export * from './recapAction';
export * from './recapTracking';

export const recapTacticSchemas: Record<
  RecapTacticValue['type'],
  yup.ObjectSchema<RecapTacticValue>
> = {
  'recap-tracking': recapTrackingTacticSchema,
  'recap-action': recapActionTacticSchema,
} as any;

export const recapTacticSchema = yup.lazy(value => {
  if (!value) return yup.mixed().required();

  if (typeof value.type === 'string' && value.type in recapTacticSchemas) {
    return recapTacticSchemas[value.type as RecapTacticValue['type']];
  }

  return yup.object({
    type: yup
      .mixed<RecapTacticValue['type']>()
      .oneOf(Object.keys(recapTacticSchemas) as RecapTacticValue['type'][])
      .required(),
  });
}) as yup.Lazy<ValidatedRecapTactic>;

// / This type represents the union of all possible validated tactic objects
type ValidatedRecapTactic = {
  [K in RecapTacticValue['type']]: yup.InferType<
    (typeof recapTacticSchemas)[K]
  >;
}[RecapTacticValue['type']];

export type RecapTacticValue =
  | RecapActionTacticValue
  | RecapTrackingTacticValue;

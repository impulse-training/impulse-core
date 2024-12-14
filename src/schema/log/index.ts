import * as yup from 'yup';
import { CallLogValue, callLogSchema } from './call';
import { DayReviewLogValue, dayReviewLogSchema } from './dayReview';
import { RegularLogValue, regularLogSchema } from './regular';
import { ShowTourLogValue, showTourLogSchema } from './showTourLog';
import { TacticsLogValue } from './tacticsLog';
import {
  WhatsappMessageLogValue,
  whatsappMessageLogSchema,
} from './whatsappMessageLog';

export * from './dayReview';
export * from './regular';
export * from './showTourLog';
export * from './tacticsLog';
export * from './whatsappMessageLog';

// Utils
export * from './utils/behaviorData';
export * from './utils/guards';

export const logSchemas: Record<
  LogValue['type'],
  yup.ObjectSchema<LogValue>
> = {
  call: callLogSchema,
  regular: regularLogSchema,
  showTour: showTourLogSchema,
  dayReview: dayReviewLogSchema,
  whatsappMessage: whatsappMessageLogSchema,
} as any;

export const logSchema = yup.lazy((value: any) => {
  if (!value) return yup.mixed().required();

  if (typeof value.type === 'string' && value.type in logSchemas) {
    return logSchemas[value.type as LogValue['type']];
  }

  return yup.object({
    type: yup
      .mixed<LogValue['type']>()
      .oneOf(Object.keys(logSchemas) as LogValue['type'][])
      .required(),
  });
}) as yup.Lazy<ValidatedLog>;

// / This type represents the union of all possible validated tactic objects
type ValidatedLog = {
  [K in LogValue['type']]: yup.InferType<(typeof logSchemas)[K]>;
}[LogValue['type']];

export type LogValue =
  | RegularLogValue
  | CallLogValue
  | TacticsLogValue
  | ShowTourLogValue
  | DayReviewLogValue
  | WhatsappMessageLogValue;

import * as yup from 'yup';
import { ActionRecapLogValue, actionRecapLogSchema } from './actionRecap';
import { AnimationLogValue, animationLogSchema } from './animationLog';
import { DayReviewLogValue, dayReviewLogSchema } from './dayReview';
import { ImpulseLogValue, impulseLogSchema } from './impulseLog';
import { MessageLogValue, messageLogSchema } from './messageLog';
import { QuestionsLogValue, questionsLogSchema } from './questionsLog';
import { ShowTourLogValue, showTourLogSchema } from './showTourLog';
import { TacticsLogValue, tacticsLogSchema } from './tacticsLog';
import {
  WhatsappMessageLogValue,
  whatsappMessageLogSchema,
} from './whatsappMessageLog';

export * from './actionRecap';
export * from './animationLog';
export * from './dayReview';
export * from './impulseLog';
export * from './messageLog';
export * from './questionsLog';
export * from './showTourLog';
export * from './tacticsLog';
export * from './whatsappMessageLog';

export * from './utils/guards';

export const logSchemas: Record<
  LogValue['type'],
  yup.ObjectSchema<LogValue>
> = {
  animation: animationLogSchema,
  impulse: impulseLogSchema,
  message: messageLogSchema,
  question: questionsLogSchema,
  tactics: tacticsLogSchema,
  actionRecap: actionRecapLogSchema,
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
  | AnimationLogValue
  | ImpulseLogValue
  | MessageLogValue
  | QuestionsLogValue
  | ActionRecapLogValue
  | TacticsLogValue
  | ShowTourLogValue
  | DayReviewLogValue
  | WhatsappMessageLogValue;

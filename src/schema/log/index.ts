import * as yup from 'yup';
import { ImpulseLogValue, impulseLogSchema } from './impulseLog';
import { MessageLogValue, messageLogSchema } from './messageLog';
import { QuestionsLogValue, questionsLogSchema } from './questionsLog';
import { StrategiesLogValue, strategiesLogSchema } from './strategiesLog';

export * from './impulseLog';
export * from './messageLog';
export * from './questionsLog';
export * from './strategiesLog';
export * from './utils/guards';

export const logSchemas: Record<
  LogValue['type'],
  yup.ObjectSchema<LogValue>
> = {
  impulse: impulseLogSchema,
  message: messageLogSchema,
  question: questionsLogSchema,
  strategies: strategiesLogSchema,
} as any;

export const logSchema = yup.lazy(value => {
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
}) as yup.Lazy<ValidatedQuestion>;

// / This type represents the union of all possible validated tactic objects
type ValidatedQuestion = {
  [K in LogValue['type']]: yup.InferType<(typeof logSchemas)[K]>;
}[LogValue['type']];

export type LogValue =
  | ImpulseLogValue
  | MessageLogValue
  | QuestionsLogValue
  | StrategiesLogValue;

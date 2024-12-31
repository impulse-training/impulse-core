import * as yup from 'yup';
import { CallLogValue, callLogSchema } from './call';
import { GameplanLogValue, gameplanLogSchema } from './gameplan';
import { GptLogValue, gptLogSchema } from './gpt';
import { ShowTourLogValue, showTourLogSchema } from './showTour';
import { ToolCallLogValue, toolCallLogSchema } from './toolCall';
import { UserLogValue, userLogSchema } from './user';
import {
  WhatsappMessageLogValue,
  whatsappMessageLogSchema,
} from './whatsappMessage';

export * from './gameplan';
export * from './gpt';
export * from './showTour';
export * from './toolCall';
export * from './user';
export * from './whatsappMessage';

// Utils
export * from './utils/behaviorData';
export * from './utils/emotionData';
export * from './utils/tacticData';

export const logSchemas: Record<
  LogValue['type'],
  yup.ObjectSchema<LogValue>
> = {
  gameplan: gameplanLogSchema,
  call: callLogSchema,
  toolCall: toolCallLogSchema,
  showTour: showTourLogSchema,
  user: userLogSchema,
  gpt: gptLogSchema,
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
}) as yup.Lazy<LogValues[LogValue['type']]>;

// / This type represents the union of all possible validated tactic objects
export type LogValues = {
  [K in LogValue['type']]: yup.InferType<(typeof logSchemas)[K]>;
};

export type LogValue =
  | UserLogValue
  | CallLogValue
  | ShowTourLogValue
  | ToolCallLogValue
  | WhatsappMessageLogValue
  | GameplanLogValue
  | GptLogValue;

import * as yup from 'yup';
import { CallLogValue, callLogSchema } from './callLog';
import { GptLogValue, gptLogSchema } from './gptLog';
import { ImpulseLogValue, impulseLogSchema } from './impulseLog';
import { ShowTourLogValue, showTourLogSchema } from './showTourLog';
import { ToolCallLogValue, toolCallLogSchema } from './toolCallLog';
import { UserLogValue, userLogSchema } from './userLog';
import {
  WhatsappMessageLogValue,
  whatsappMessageLogSchema,
} from './whatsappMessageLog';

export * from './gptLog';
export * from './impulseLog';
export * from './showTourLog';
export * from './toolCallLog';
export * from './userLog';
export * from './whatsappMessageLog';

// Utils
export * from './utils/behaviorData';
export * from './utils/emotionData';
export * from './utils/tacticData';

export const logSchemas: Record<
  LogValue['type'],
  yup.ObjectSchema<LogValue>
> = {
  impulseLog: impulseLogSchema,
  callLog: callLogSchema,
  toolCallLog: toolCallLogSchema,
  showTourLog: showTourLogSchema,
  userLog: userLogSchema,
  gptLog: gptLogSchema,
  whatsappMessageLog: whatsappMessageLogSchema,
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
  | ImpulseLogValue
  | GptLogValue;

import * as yup from 'yup';
import { optionalTimestampSchema, timestampSchema } from '../utils/timestamp';
import { logBaseSchema } from './base';

export const callLogSchema = logBaseSchema('call').shape({
  agentContext: yup.string().required(),
  agentConnectedAt: optionalTimestampSchema,
  endedAt: optionalTimestampSchema,
  startedSummarizingTranscriptAt: optionalTimestampSchema,
  finishedSummarizingTranscriptAt: optionalTimestampSchema,
  formattedDuration: yup.string(),
  transcriptSummary: yup.string(),
  transcriptItems: yup.array().of(
    yup
      .object({
        text: yup.string().required(),
        timestamp: timestampSchema,
      })
      .required()
  ),
});
export type CallLogValue = yup.InferType<typeof callLogSchema>;

import * as yup from 'yup';
import { LogValue, logSchema } from './log';
import { objectOf } from './utils/objectOf';
import { optionalTimestampSchema, timestampSchema } from './utils/timestamp';

// And this is a summary of all the tactics for a given log entry
export const daySchema = yup.object({
  date: timestampSchema,
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  logsById: objectOf(logSchema),
  isProcessing: yup.boolean().default(false),
});

export type DayValue = Omit<yup.InferType<typeof daySchema>, 'logsById'> & {
  logsById: Record<string, LogValue>;
};

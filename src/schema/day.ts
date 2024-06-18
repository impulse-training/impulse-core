import * as yup from 'yup';
import { log2Schema } from './log2';
import { objectOf } from './utils/objectOf';
import { timestampSchema } from './utils/timestamp';

// And this is a summary of all the tactics for a given log entry
const day = yup.object({
  date: timestampSchema,
  profileId: yup.string().required(),
  logsById: objectOf(log2Schema),
  isProcessing: yup.boolean().default(false),
});

export type DayValue = yup.InferType<typeof day>;

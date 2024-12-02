import * as yup from 'yup';
import { LogValue, logSchema } from './log';
import { questionSchema } from './question';
import { objectOf } from './utils/objectOf';
import { timestampSchema } from './utils/timestamp';

// And this is a summary of all the tactics for a given log entry
export const daySchema = yup.object({
  date: timestampSchema,
  issueName: yup.string().required(),
  logsById: objectOf(logSchema),
  questionsById: objectOf(questionSchema),
  summary: yup.string().nullable().defined(),
});

export type DayValue = Omit<yup.InferType<typeof daySchema>, 'logsById'> & {
  logsById: Record<string, LogValue>;
};

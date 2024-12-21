import * as yup from 'yup';
import { LogValue, logSchema } from './log';
import { objectOf } from './utils/objectOf';
import { timestampSchema } from './utils/timestamp';

export const daySchema = yup.object({
  uid: yup.string().required(),
  date: timestampSchema,
  logsById: objectOf(logSchema),
});

// We short-cut to the LogValue schema, instead of using yup to derive the LogSchema again. This
// helps to cut down the length and complexity of generated type files without changing any type
// definitions
export type DayValue = Omit<yup.InferType<typeof daySchema>, 'logsById'> & {
  logsById: Record<string, LogValue>;
};

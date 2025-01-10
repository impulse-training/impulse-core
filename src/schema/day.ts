import * as yup from 'yup';
import { LogValue, logSchema } from './log';
import {
  DocumentReferenceLike,
  documentReferenceSchema,
} from './utils/firestore';
import { objectOf } from './utils/objectOf';
import { timestampSchema } from './utils/timestamp';

export const logsById = objectOf(
  yup.object({
    doc: documentReferenceSchema.required(),
    log: logSchema,
  })
);
export type LogsById = Record<
  string,
  { doc: DocumentReferenceLike<LogValue>; log: LogValue }
>;

export const daySchema = yup.object({
  uid: yup.string().required(),
  date: timestampSchema,
  logsById,
});

// We short-cut to the LogValue schema, instead of using yup to derive the LogSchema again. This
// helps to cut down the length and complexity of generated type files without changing any type
// definitions
export type DayValue = Omit<yup.InferType<typeof daySchema>, 'logsById'> & {
  logsById: LogsById;
};

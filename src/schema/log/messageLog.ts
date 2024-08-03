import * as yup from 'yup';
import { fileSchema } from '../utils/file';
import { logBaseSchema } from './base';

export const messageLogSchema = logBaseSchema('message').shape({
  text: yup.string().required(),
  file: fileSchema.notRequired(),
});

export type MessageLogValue = yup.InferType<typeof messageLogSchema>;

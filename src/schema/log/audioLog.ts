import * as yup from 'yup';
import { fileSchema } from '../utils/file';
import { logBaseSchema } from './base';

export const audioLogSchema = logBaseSchema('audio').shape({
  file: fileSchema.required(),
  durationSeconds: yup.number().required(),
});

export type AudioLogValue = yup.InferType<typeof audioLogSchema>;

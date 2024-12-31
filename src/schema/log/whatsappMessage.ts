import * as yup from 'yup';
import { fileSchema } from '../utils/file';
import { logBaseSchema } from './base';

export const whatsappMessageLogSchema = logBaseSchema('whatsappMessage').shape({
  files: yup.array().of(fileSchema).notRequired(),
});

export type WhatsappMessageLogValue = yup.InferType<
  typeof whatsappMessageLogSchema
>;

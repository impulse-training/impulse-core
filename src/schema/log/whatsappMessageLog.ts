import * as yup from 'yup';
import { fileSchema } from '../utils/file';
import { documentReferenceSchema } from '../utils/firestore';
import { logBaseSchema } from './base';

export const whatsappMessageLogSchema = logBaseSchema('whatsappMessage').shape({
  files: yup.array().of(fileSchema).notRequired(),
  folderDoc: documentReferenceSchema.required(),
});

export type WhatsappMessageLogValue = yup.InferType<
  typeof whatsappMessageLogSchema
>;

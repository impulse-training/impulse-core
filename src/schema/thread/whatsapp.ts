import * as yup from 'yup';
import { documentReferenceSchema } from '../utils/firestore';
import threadBase from './base';

export const whatsappThreadSchema = threadBase('whatsapp').shape({
  folderDoc: documentReferenceSchema,
});
export type WhatsappThreadValue = yup.InferType<typeof whatsappThreadSchema>;

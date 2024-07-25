import * as yup from 'yup';
import { logBaseSchema } from './base';

export const whatsappMessageLogSchema = logBaseSchema('whatsappMessage');

export type WhatsappMessageLogValue = yup.InferType<
  typeof whatsappMessageLogSchema
>;

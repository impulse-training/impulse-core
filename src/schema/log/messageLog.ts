import * as yup from 'yup';
import { logBaseSchema } from './base';

export const messageLogSchema = logBaseSchema('message').shape({
  text: yup.string().required(),
});

export type MessageLogValue = yup.InferType<typeof messageLogSchema>;

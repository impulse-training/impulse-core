import * as yup from 'yup';
import { logBaseSchema } from './base';

export const regularLogSchema = logBaseSchema('regular').shape({
  pressedImpulseButton: yup.boolean(),
});
export type RegularLogValue = yup.InferType<typeof regularLogSchema>;

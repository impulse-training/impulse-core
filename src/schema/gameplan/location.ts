import * as yup from 'yup';
import { gameplanBaseSchema } from './base';

export const locationGameplanSchema = gameplanBaseSchema('location').shape({
  name: yup.string().required(),
  type: yup.string().oneOf(['arrival', 'departure', 'both']).required(),
});
export type LocationGameplanValue = yup.InferType<
  typeof locationGameplanSchema
>;

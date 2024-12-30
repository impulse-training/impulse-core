import * as yup from 'yup';
import { gameplanBaseSchema } from './base';

export const cravingGameplanSchema = gameplanBaseSchema('craving').shape({
  behaviorId: yup.string().required(), // The behavior this craving is for
  // intensity: yup.string().oneOf(['mild', 'moderate', 'severe']),
});
export type CravingGameplanValue = yup.InferType<typeof cravingGameplanSchema>;

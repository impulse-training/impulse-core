import * as yup from 'yup';
import { tacticValueBaseSchema } from './base';

export const linkTacticSchema = tacticValueBaseSchema('link');
export type LinkTacticValue = yup.InferType<typeof linkTacticSchema>;

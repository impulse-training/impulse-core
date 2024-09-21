import * as yup from 'yup';
import { tacticValueBaseSchema } from './base';

export const zaraTacticSchema = tacticValueBaseSchema('zara');
export type ZaraTacticValue = yup.InferType<typeof zaraTacticSchema>;

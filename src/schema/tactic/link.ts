import * as yup from 'yup';
import { tacticBaseSchema } from './base';
export const linkTacticSchema = tacticBaseSchema('link').shape({
  url: yup
    .string()
    .matches(/^[a-zA-Z][a-zA-Z\d+\-.]*:\/\/[^\s$.?#].[^\s]*$/i, 'Invalid URL')
    .required('URL is required'),
});
export type LinkTacticValue = yup.InferType<typeof linkTacticSchema>;

import * as yup from 'yup';
import { requiredStringArray } from './utils/array';

export const mailTemplateSchema = yup.object().shape({
  html: yup.string().required(),
  subject: yup.string().required(),
  requiredDataKeys: requiredStringArray,
});

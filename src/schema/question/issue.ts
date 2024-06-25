import * as yup from 'yup';
import { questionBaseSchema } from './base';

export const questionIssueSchema = questionBaseSchema('issue');

export type QuestionIssueValue = yup.InferType<typeof questionIssueSchema>;

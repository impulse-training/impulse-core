import * as yup from 'yup';
import { questionBaseSchema } from './base';

export const issueQuestionSchema = questionBaseSchema('issue');

export type IssueQuestionValue = yup.InferType<typeof issueQuestionSchema>;

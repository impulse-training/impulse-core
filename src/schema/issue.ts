import * as yup from 'yup';
import { questionTacticSchema } from './tactic';
import { requiredStringArray } from './utils/array';
import { timestampSchema } from './utils/timestamp';

export const issueSchema = yup.object().shape({
  createdAt: timestampSchema.required(),
  updatedAt: timestampSchema.required(),
  parentId: yup.string().nullable(),
  name: yup.string().required(),
  synonyms: yup
    .array()
    .of(yup.string().required())
    .required()
    .test('includes-name', 'Synonyms must include name', function (synonyms) {
      return synonyms.includes(this.parent.name);
    }),
  measureTactic: questionTacticSchema,
  setbackThreshold: yup.number(),
  path: yup.string().nullable(),
  parentIds: requiredStringArray,
  parentNames: requiredStringArray,
  strategiesCount: yup.number().nullable(),
  profileCount: yup.number().nullable(),
  isFeatured: yup.boolean().nullable(),
});
export type IssueValue = yup.InferType<typeof issueSchema>;

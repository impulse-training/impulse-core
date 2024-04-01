import * as yup from 'yup';
import { measureTacticSchema } from './tactic';
import { requiredStringArray } from './utils/array';
import { timestampSchema } from './utils/timestamp';

const impulseSchema = yup.object().shape({
  llmPrompt: yup.string().required(),
  suggestedTacticIds: requiredStringArray,
});

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
  measureTactic: measureTacticSchema,
  setbackThreshold: yup.number(),
  path: yup.string().nullable(),
  parentIds: requiredStringArray,
  parentNames: requiredStringArray,
  strategiesCount: yup.number().nullable(),
  profileCount: yup.number().nullable(),
  isFeatured: yup.boolean().nullable(),
  impulseStrategy: impulseSchema.notRequired().default(undefined),
});
export type IssueValue = yup.InferType<typeof issueSchema>;

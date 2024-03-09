import * as yup from 'yup';
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
    .of(yup.string())
    .required()
    .test('includes-name', 'Synonyms must include name', function (synonyms) {
      return synonyms.includes(this.parent.name);
    }),
  unit: yup.mixed<'time' | 'custom'>().oneOf(['time', 'custom']).required(),
  customUnit: yup.string().when('unit', (unit, schema) => {
    return (unit as unknown as string) === 'custom'
      ? schema.required('customUnit is required when unit is custom')
      : schema.notRequired();
  }),
  path: yup.string().nullable(),
  parentIds: yup.array().of(yup.string()).required(),
  parentNames: yup.array().of(yup.string()).required(),
  programsCount: yup.number().nullable(),
  profileCount: yup.number().nullable(),
  isFeatured: yup.boolean().nullable(),
  impulse: impulseSchema.nullable(),
  impulseDebrief: impulseSchema.nullable(),
});
export type IssueValue = yup.InferType<typeof issueSchema>;

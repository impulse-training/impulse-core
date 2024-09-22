import * as yup from 'yup';
import { requiredStringArray } from './utils/array';
import { documentReferenceSchema } from './utils/firestore';
import { optionalTimestampSchema } from './utils/timestamp';

export const issueSchema = yup.object().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  parentId: yup.string().nullable(),
  name: yup.string().required(),
  hasDebriefQuestion: yup.boolean(),
  synonyms: yup
    .array()
    .of(yup.string().required())
    .required()
    .test('includes-name', 'Synonyms must include name', function (synonyms) {
      return synonyms.includes(this.parent.name);
    }),
  path: yup.string().nullable(),
  parentIds: requiredStringArray,
  parentNames: requiredStringArray,
  profileCount: yup.number().nullable(),
  isFeatured: yup.boolean().nullable(),
  // For profile issues, we store references to the tactics that are the user's "gameplan" for the
  // issue
  supportGroups: yup.array().of(documentReferenceSchema.required()),
  gameplanTactics: yup.array().of(documentReferenceSchema.required()),
});
export type IssueValue = yup.InferType<typeof issueSchema>;

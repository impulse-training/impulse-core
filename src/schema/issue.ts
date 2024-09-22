import * as yup from 'yup';
import { optionalStringArray } from './utils/array';
import { documentReferenceSchema } from './utils/firestore';
import { optionalTimestampSchema } from './utils/timestamp';

export const issueSchema = yup.object().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  name: yup.string().required(),
  parentId: yup.string().nullable(),
  parentName: yup.string().nullable(),
  hasDebriefQuestion: yup.boolean(),
  synonyms: yup.array().of(yup.string().required()),
  path: yup.string().nullable(),
  parentIds: optionalStringArray,
  parentNames: optionalStringArray,
  profileCount: yup.number().nullable(),
  isFeatured: yup.boolean().nullable(),
  // For profile issues, we store references to the tactics that are the user's "gameplan" for the
  // issue
  supportGroups: yup.array().of(documentReferenceSchema.required()),
  gameplanTactics: yup.array().of(documentReferenceSchema.required()),
});
export type IssueValue = yup.InferType<typeof issueSchema>;

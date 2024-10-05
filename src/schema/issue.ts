import * as yup from 'yup';
import { optionalStringArray } from './utils/array';
import { documentReferenceSchema } from './utils/firestore';
import { optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const issueSchema = yup.object().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  name: yup.string().required(),
  parentId: yup.string().nullable(),
  parentName: yup.string().nullable(),
  hasDebriefQuestion: yup.boolean(),
  ordinal: yup.number(),
  synonyms: yup.array().of(yup.string().required()),
  path: yup.string().nullable(),
  parentIds: optionalStringArray,
  parentNames: optionalStringArray,
  profileCount: yup.number().nullable(),
  isFeatured: yup.boolean().nullable(),

  blandContext: yup.string(),

  // For top-level issues, we store references to recommended support groups
  recommendedFolders: yup.array().of(documentReferenceSchema.required()),
  // For profile issues, we store references to the tactics that are the user's "gameplan" for the
  // issue

  // For profile issues, we store a map of ordinals
  folderOrdinals: optionalObjectOf(yup.number().required()),

  gameplanTactics: yup.array().of(documentReferenceSchema.required()),
});
export type IssueValue = yup.InferType<typeof issueSchema>;

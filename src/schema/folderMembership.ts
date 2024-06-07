import * as yup from 'yup';
import { folderSchema } from './folder';
import { documentReferenceSchema } from './utils/firestore';
import { objectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const folderMembershipSchema = yup.object().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  folderRef: documentReferenceSchema.required(),
  folderData: folderSchema,
  ordinal: yup.number().required(),
  seenTactics: objectOf(yup.boolean().required()),
  tacticOrdinals: objectOf(yup.number().required()),
  tacticLikes: objectOf(yup.boolean().required()),
});

export type FolderMembershipValue = yup.InferType<
  typeof folderMembershipSchema
>;

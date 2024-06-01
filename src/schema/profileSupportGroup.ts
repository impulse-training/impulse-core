import * as yup from 'yup';
import { supportGroupSchema } from './supportGroup';
import { objectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const profileSupportGroupSchema = yup.object().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  data: supportGroupSchema,
  ordinal: yup.number().required(),
  seenTactics: objectOf(yup.boolean().required()),
  tacticOrdinals: objectOf(yup.number().required()),
  tacticLikes: objectOf(yup.boolean().required()),
});

export type ProfileSupportGroupValue = yup.InferType<
  typeof profileSupportGroupSchema
>;

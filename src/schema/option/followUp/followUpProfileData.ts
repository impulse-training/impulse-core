import * as yup from 'yup';
import { followUpBaseSchema } from './base';

export const followUpProfileDataSchema = followUpBaseSchema(
  'profileData'
).shape({
  profileKey: yup.string().required(),
  profileValue: yup.mixed().required(),
});

export type FollowUpProfileDataValue = yup.InferType<
  typeof followUpProfileDataSchema
>;

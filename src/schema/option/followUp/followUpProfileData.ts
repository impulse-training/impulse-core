import * as yup from 'yup';

export const followUpProfileDataSchema = yup.object({
  type: yup.mixed<'profileData'>().oneOf(['profileData']).defined(),
  profileKey: yup.string().required(),
  profileValue: yup.mixed().required(),
});
export type FollowUpProfileDataValue = yup.InferType<
  typeof followUpProfileDataSchema
>;

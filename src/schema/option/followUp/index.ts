import * as yup from 'yup';
import {
  FollowUpProfileDataValue,
  followUpProfileDataSchema,
} from './followUpProfileData';
import {
  FollowUpQuestionValue,
  followUpQuestionSchema,
} from './followUpQuestion';

export * from './followUpProfileData';
export * from './followUpQuestion';

export const followUpSchemas: Record<
  FollowUpValue['type'],
  yup.ObjectSchema<FollowUpValue>
> = {
  question: followUpQuestionSchema,
  profileData: followUpProfileDataSchema,
} as any;

export const followUpSchema = yup.lazy(value => {
  if (!value) return yup.mixed().required();

  if (typeof value.type === 'string' && value.type in followUpSchemas) {
    return followUpSchemas[value.type as FollowUpValue['type']];
  }

  return yup.object({
    type: yup
      .mixed<FollowUpValue['type']>()
      .oneOf(Object.keys(followUpSchemas) as FollowUpValue['type'][])
      .required(),
  });
}) as yup.Lazy<ValidatedFollowUp>;

type ValidatedFollowUp = {
  [K in FollowUpValue['type']]: yup.InferType<(typeof followUpSchemas)[K]>;
}[FollowUpValue['type']];

export type FollowUpValue = FollowUpQuestionValue | FollowUpProfileDataValue;

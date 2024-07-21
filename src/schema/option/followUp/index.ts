import * as yup from 'yup';
import {
  FollowUpQuestionValue,
  askAnotherQuestionSchema,
} from './askAnotherQuestion';
import { ShowTourFollowUpValue, showTourFollowUpSchema } from './showTour';
import {
  WriteAnswerToProfileValue,
  writeAnswerToProfileSchema,
} from './writeAnswerToProfile';
import {
  WriteValueToProfileValue,
  writeValueToProfileSchema,
} from './writeValueToProfile';

export * from './askAnotherQuestion';
export * from './showTour';
export * from './writeAnswerToProfile';
export * from './writeValueToProfile';

export const followUpSchemas: Record<
  FollowUpValue['type'],
  yup.ObjectSchema<FollowUpValue>
> = {
  askAnotherQuestion: askAnotherQuestionSchema,
  writeAnswerToProfile: writeAnswerToProfileSchema,
  writeValueToProfile: writeValueToProfileSchema,
  showTour: showTourFollowUpSchema,
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

export type FollowUpValue =
  | FollowUpQuestionValue
  | WriteAnswerToProfileValue
  | WriteValueToProfileValue
  | ShowTourFollowUpValue;

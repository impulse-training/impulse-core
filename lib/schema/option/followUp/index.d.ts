import * as yup from 'yup';
import { FollowUpProfileDataValue } from './followUpProfileData';
import { FollowUpQuestionValue } from './followUpQuestion';
export * from './followUpProfileData';
export * from './followUpQuestion';
export declare const followUpSchemas: Record<FollowUpValue['type'], yup.ObjectSchema<FollowUpValue>>;
export declare const followUpSchema: yup.Lazy<ValidatedFollowUp, yup.AnyObject, any>;
type ValidatedFollowUp = {
    [K in FollowUpValue['type']]: yup.InferType<(typeof followUpSchemas)[K]>;
}[FollowUpValue['type']];
export type FollowUpValue = FollowUpQuestionValue | FollowUpProfileDataValue;

import * as yup from 'yup';
import { FollowUpQuestionValue } from './askAnotherQuestion';
import { ShowTourFollowUpValue } from './showTour';
import { WriteAnswerToProfileValue } from './writeAnswerToProfile';
import { WriteValueToProfileValue } from './writeValueToProfile';
export * from './askAnotherQuestion';
export * from './showTour';
export * from './writeAnswerToProfile';
export * from './writeValueToProfile';
export declare const followUpSchemas: Record<FollowUpValue['type'], yup.ObjectSchema<FollowUpValue>>;
export declare const followUpSchema: yup.Lazy<ValidatedFollowUp, yup.AnyObject, any>;
type ValidatedFollowUp = {
    [K in FollowUpValue['type']]: yup.InferType<(typeof followUpSchemas)[K]>;
}[FollowUpValue['type']];
export type FollowUpValue = FollowUpQuestionValue | WriteAnswerToProfileValue | WriteValueToProfileValue | ShowTourFollowUpValue;

import * as yup from 'yup';
import {
  dayDebriefRoutineSchema,
  locationRoutineSchema,
  timeRoutineSchema,
} from './routine';
import { WithTacticsById, tacticSchema } from './tactic';
import { requiredStringArray } from './utils/array';
import { objectOf } from './utils/objectOf';
import { optionalTimestampSchema, timestampSchema } from './utils/timestamp';

export const recommendationSchema = yup.object().shape({
  uid: yup.string().required(),
  ordinal: yup.number().required(),
  title: yup.string().required(),
  routineExplanation: yup.string().nullable(),
  recommenderUid: yup.string().required(),
  recommenderName: yup.string().required(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
  appliedAt: optionalTimestampSchema,
  dismissedAt: optionalTimestampSchema,
  tacticIds: requiredStringArray,
  tacticsById: objectOf(tacticSchema) as any,
  property: yup
    .mixed<'impulse' | 'impulseDebrief' | 'routine'>()
    .oneOf(['impulse', 'impulseDebrief', 'routine'])
    .required(),
  ruleId: yup.string().nullable(),
  routine: yup
    .mixed()
    .oneOf([timeRoutineSchema, locationRoutineSchema, dayDebriefRoutineSchema])
    .notRequired(),
  patternIds: yup.array().of(yup.string()).notRequired(),
});

export type RecommendationValue = WithTacticsById<
  yup.InferType<typeof recommendationSchema>
>;

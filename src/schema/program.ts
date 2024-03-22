import * as yup from 'yup';
import {
  locationRoutineSchema,
  strategySchema,
  timeRoutineSchema,
} from './gameplan';
import { WithTacticsById, tacticSchema } from './tactic';
import { requiredStringArray } from './utils/array';
import { objectOf, optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const programSchema = yup.object().shape({
  title: yup.string().required(),
  forIssueIds: requiredStringArray,
  issueNames: optionalObjectOf(yup.string()),
  issueNamesSummary: yup.string().nullable(),
  recommendationSummary: yup.string().nullable(),
  main: strategySchema,
  success: strategySchema.notRequired().default(undefined),
  setback: strategySchema.notRequired().default(undefined),
  time: optionalObjectOf(timeRoutineSchema.required()),
  location: optionalObjectOf(locationRoutineSchema.required()),
  tacticsById: objectOf(tacticSchema) as any,
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});

export type ProgramValue = WithTacticsById<yup.InferType<typeof programSchema>>;

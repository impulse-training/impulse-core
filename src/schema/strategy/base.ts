import * as yup from 'yup';
import { strategySchema } from '.';
import { WithTacticsById, tacticSchema } from '../tactic';
import { requiredStringArray } from '../utils/array';
import { objectOf, optionalObjectOf } from '../utils/objectOf';
import { optionalTimestampSchema } from '../utils/timestamp';

export function strategyValueBaseSchema<K extends string>(type: K) {
  return yup.object({
    type: yup.mixed<K>().oneOf([type]).defined(),
    title: yup.string().required(),
    forIssueIds: requiredStringArray,
    issueNames: optionalObjectOf(yup.string()),
    issueNamesSummary: yup.string().nullable(),
    recommendationSummary: yup.string().nullable(),
    tacticIds: requiredStringArray,
    tacticsById: objectOf(tacticSchema) as any,
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
  });
}

export type StrategyValue = WithTacticsById<
  yup.InferType<typeof strategySchema>
>;

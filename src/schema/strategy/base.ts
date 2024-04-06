import * as yup from 'yup';
import { strategySchema } from '.';
import { WithTacticsById } from '../tactic';
import { requiredStringArray } from '../utils/array';
import { optionalTimestampSchema } from '../utils/timestamp';

export function strategyBaseSchema<K extends string>(type: K) {
  return yup.object({
    ordinal: yup.number().notRequired(),
    type: yup.mixed<K>().oneOf([type]).defined(),
    name: yup.string().required(),
    tacticIds: requiredStringArray,
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
  });
}

export type StrategyValue = WithTacticsById<
  yup.InferType<typeof strategySchema>
>;

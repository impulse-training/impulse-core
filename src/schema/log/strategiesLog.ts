import * as yup from 'yup';
import { strategySchema } from '../strategy';
import { requiredStringArray } from '../utils/array';
import { objectOf } from '../utils/objectOf';
import { logBaseSchema } from './base';
import { gptResponseMixin } from './utils/gpt';

export const strategiesLogSchema = logBaseSchema('strategies').shape({
  strategyIds: requiredStringArray,
  strategiesById: objectOf(strategySchema),
  completedTacticIds: requiredStringArray,
  ...gptResponseMixin, // These logs can be generated by OpenAI
});

export type StrategiesLogValue = yup.InferType<typeof strategiesLogSchema>;

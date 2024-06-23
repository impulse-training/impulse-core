import * as yup from 'yup';
import { logBaseSchema } from './base';

export const actionRecapLogSchema = logBaseSchema('actionRecap').shape({
  choice: yup
    .mixed<'moreStrategies' | 'debrief'>()
    .oneOf(['moreStrategies', 'debrief']),
});

export type ActionRecapLogValue = yup.InferType<typeof actionRecapLogSchema>;

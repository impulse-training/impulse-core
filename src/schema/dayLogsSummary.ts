import * as yup from 'yup';
import { tacticDataSchema } from './log';
import { optionSchema } from './option';
import { objectOf } from './utils/objectOf';

// This is a summary of an individual tactic data entry
export type TacticSummaryValue = yup.InferType<typeof tacticDataSchema>;

// And this is a summary of all the tactics for a given log entry
const logSummarySchema = yup.object({
  type: yup
    .mixed<'time' | 'impulse'>()
    .oneOf(['time', 'impulse'])
    .required()
    .nonNullable(),
  hour: yup.number().required(),
  minute: yup.number().required(),
  tacticDataById: objectOf(tacticDataSchema),
  optionsById: objectOf(optionSchema),
});
export type LogSummaryValue = yup.InferType<typeof logSummarySchema>;

// Which is combined into a daily summary. Note that this document doesn't include profileId, as
// that's encoded into the document path
export const dayLogsSummarySchema = objectOf(logSummarySchema);

export type DayLogsSummaryValue = yup.InferType<typeof dayLogsSummarySchema>;

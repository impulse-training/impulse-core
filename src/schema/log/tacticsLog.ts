import * as yup from 'yup';
import { tacticSchema } from '../tactic';
import { optionalStringArray, requiredStringArray } from '../utils/array';
import { objectOf } from '../utils/objectOf';
import { logBaseSchema } from './base';

export const tacticsLogSchema = logBaseSchema('tactics').shape({
  // This flag can be set to true when the user is browsing and adding tactics
  isAddToGameplanMode: yup.boolean(),
  suggestedTacticDocPaths: optionalStringArray,
  tacticsById: objectOf(tacticSchema),
  // These are the tactics that the user has completed
  completedTacticIds: requiredStringArray,
});

export type TacticsLogValue = yup.InferType<typeof tacticsLogSchema>;

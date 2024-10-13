import * as yup from 'yup';
import { tacticSchema } from '../tactic';
import { optionalStringArray, requiredStringArray } from '../utils/array';
import { documentReferenceSchema } from '../utils/firestore';
import { objectOf } from '../utils/objectOf';
import { logBaseSchema } from './base';

export const tacticsLogSchema = logBaseSchema('tactics').shape({
  title: yup.string(),
  // Optionally, a tactics log can link to a suggestion, which was it's source
  sourceSuggestion: documentReferenceSchema,

  // This flag can be set to true when the user is browsing and adding tactics
  isAddToGameplanMode: yup.boolean(),

  suggestedTacticDocPaths: optionalStringArray,
  tacticsById: objectOf(tacticSchema),
  // These are the tactics that the user has completed
  completedTacticIds: requiredStringArray,
});

export type TacticsLogValue = yup.InferType<typeof tacticsLogSchema>;

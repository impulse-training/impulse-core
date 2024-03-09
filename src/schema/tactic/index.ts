import * as yup from 'yup';
import { AudioTacticValue, audioTacticSchema } from './audio';
import { BreatheTacticValue, breatheTacticSchema } from './breathe';
import { EmotionsTacticValue, emotionsTacticSchema } from './emotions';
import { FolderTacticValue, folderTacticSchema } from './folder';
import {
  MeasureTacticValue,
  measureCounterTacticSchema,
  measureSliderTacticSchema,
  measureTimeTacticSchema,
} from './measure';
import { PhoneTacticValue, phoneTacticSchema } from './phone';
import { QuestionTacticValue, questionTacticSchema } from './question';
import { StepsTacticValue, stepsTacticSchema } from './steps';
import { TaskTacticValue, taskTacticSchema } from './task';
import { UrgeSurfingTacticValue, urgeSurfingTacticSchema } from './urgeSurfing';
import { VideoTacticValue, videoTacticSchema } from './video';

export * from './audio';
export * from './breathe';
export * from './emotions';
export * from './folder';
export * from './measure';
export * from './phone';
export * from './question';
export * from './steps';
export * from './task';
export * from './urgeSurfing';
export * from './video';

export * from './utils';

export type TacticValue =
  | PhoneTacticValue
  | AudioTacticValue
  | UrgeSurfingTacticValue
  | VideoTacticValue
  | QuestionTacticValue
  | TaskTacticValue
  | MeasureTacticValue
  | FolderTacticValue
  | BreatheTacticValue
  | StepsTacticValue
  | EmotionsTacticValue;

// Utility to dynamically select the correct schema based on the tactic type
export const tacticSchemas: Record<
  TacticValue['type'],
  yup.ObjectSchema<TacticValue>
> = {
  phone: phoneTacticSchema,
  audio: audioTacticSchema,
  video: videoTacticSchema,
  question: questionTacticSchema,
  folder: folderTacticSchema,
  'measure-time': measureTimeTacticSchema,
  'measure-slider': measureSliderTacticSchema,
  'measure-counter': measureCounterTacticSchema,
  breathe: breatheTacticSchema,
  steps: stepsTacticSchema,
  task: taskTacticSchema,
  emotions: emotionsTacticSchema,
  urgeSurfing: urgeSurfingTacticSchema,
} as any;
// We do highly value static typing, but the problem is that yup's generated types are bloated and
// cause problems. Instead of exporting generated types for top-level types like tacticSchemas, we
// use any to bypass complex type generation, and use type assertions to ensure that the types are
// used correctly.

// The tacticSchema is what's used to validate tactics in our database. We set an explicit return
// type to ensure that the conditional validation of only type doesn't infer that a tactic may only
// be an object with only the "type" field specified. Instead, we say that it always returns a
// validator for the known tactic types.
export const tacticSchema = yup.lazy(value => {
  if (typeof value.type === 'string' && value.type in tacticSchemas) {
    return tacticSchemas[value.type as TacticValue['type']];
  }

  return yup.object({
    type: yup
      .mixed<TacticValue['type']>()
      .oneOf(Object.keys(tacticSchemas) as TacticValue['type'][])
      .required(),
  });
}) as yup.Lazy<ValidatedTactic>;

// / This type represents the union of all possible validated tactic objects
type ValidatedTactic = {
  [K in TacticValue['type']]: yup.InferType<(typeof tacticSchemas)[K]>;
}[TacticValue['type']];

// Export type guard functions for each tactic type
export type WithTacticsById<T, TT = TacticValue> = Omit<T, 'tacticsById'> & {
  tacticsById: Record<string, TT>;
};

import * as yup from 'yup';
import { questionSchema } from '../question';
import { AudioTacticValue, audioTacticSchema } from './audio';
import {
  BreatheTacticValue,
  breathingExerciseTacticSchema,
} from './breathingExercise';
import { NotifyAContactValue, notifyAContactSchema } from './notifyContact';
import {
  NotifySupportGroupValue,
  notifySupportGroupSchema,
} from './notifySupportGroup';
import { QuestionTacticValue } from './question';
import { StepsTacticValue, stepsTacticSchema } from './steps';
import { TaskTacticValue, taskTacticSchema } from './task';
import { VideoTacticValue, videoTacticSchema } from './video';

export * from './audio';
export * from './breathingExercise';
export * from './notifyContact';
export * from './notifySupportGroup';
export * from './steps';
export * from './task';
export * from './utils';
export * from './video';

export type TacticValue =
  | AudioTacticValue
  | BreatheTacticValue
  | NotifyAContactValue
  | StepsTacticValue
  | TaskTacticValue
  | VideoTacticValue
  | NotifySupportGroupValue
  | QuestionTacticValue;
// | UrgeSurfingTacticValue
// | EmotionsTacticValue
// | DayReviewTacticValue
// | RecapTacticValue;

// Utility to dynamically select the correct schema based on the tactic type
export const tacticSchemas: Record<
  TacticValue['type'],
  yup.ObjectSchema<TacticValue>
> = {
  audio: audioTacticSchema,
  breathingExercise: breathingExerciseTacticSchema,
  notifyASupportPerson: notifyAContactSchema,
  notifySupportGroup: notifySupportGroupSchema,
  task: taskTacticSchema,
  video: videoTacticSchema,
  question: questionSchema,
  steps: stepsTacticSchema,
  // emotions: emotionsTacticSchema,
  // 'day-review': dayReviewTacticSchema,
  // 'urge-surfing': urgeSurfingTacticSchema,
  // ...recapTacticSchemas,
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

export type TacticsById = Record<string, TacticValue>;

// Export type guard functions for each tactic type (TT)
export type WithTacticsById<T> = Omit<T, 'tacticsById'> & {
  tacticsById: TacticsById;
};

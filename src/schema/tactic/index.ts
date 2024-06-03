import * as yup from 'yup';
import { objectOf } from '../utils/objectOf';
import { AudioTacticValue, audioTacticSchema } from './audio';
import { BreatheTacticValue, breatheTacticSchema } from './breathe';
import { DayReviewTacticValue, dayReviewTacticSchema } from './dayReview';
import { EmotionsTacticValue, emotionsTacticSchema } from './emotions';
import { PhoneTacticValue, phoneTacticSchema } from './phone';
import { QuestionTacticValue, questionTacticSchemas } from './question';
import { RecapTacticValue, recapTacticSchemas } from './recap';
import { StepsTacticValue, stepsTacticSchema } from './steps';
import { TaskTacticValue, taskTacticSchema } from './task';
import { UrgeSurfingTacticValue, urgeSurfingTacticSchema } from './urgeSurfing';
import { VideoTacticValue, videoTacticSchema } from './video';

export * from './audio';
export * from './breathe';
export * from './dayReview';
export * from './emotions';
export * from './phone';
export * from './question';
export * from './steps';
export * from './task';
export * from './urgeSurfing';
export * from './utils';
export * from './video';

export type TacticValue =
  | PhoneTacticValue
  | AudioTacticValue
  | UrgeSurfingTacticValue
  | VideoTacticValue
  | QuestionTacticValue
  | TaskTacticValue
  | BreatheTacticValue
  | StepsTacticValue
  | EmotionsTacticValue
  | DayReviewTacticValue
  | RecapTacticValue;

// Utility to dynamically select the correct schema based on the tactic type
export const tacticSchemas: Record<
  TacticValue['type'],
  yup.ObjectSchema<TacticValue>
> = {
  phone: phoneTacticSchema,
  audio: audioTacticSchema,
  video: videoTacticSchema,
  breathe: breatheTacticSchema,
  steps: stepsTacticSchema,
  task: taskTacticSchema,
  emotions: emotionsTacticSchema,
  'day-review': dayReviewTacticSchema,
  'urge-surfing': urgeSurfingTacticSchema,
  ...questionTacticSchemas,
  ...recapTacticSchemas,
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

export const tacticInfoSchema = yup.object({
  id: yup.string().required(),
  path: yup.string().required(),
  tactic: tacticSchema as any, // This is overwritten by casting with the WithTacticsById type
});
export type TacticInfo = Omit<
  yup.InferType<typeof tacticInfoSchema>,
  'tactic'
> & { tactic: TacticValue };
export const tacticsByIdSchema = objectOf(tacticInfoSchema);
export type TacticsById = Record<string, TacticInfo>;

// Export type guard functions for each tactic type (TT)
export type WithTacticsById<T> = Omit<T, 'tacticsById'> & {
  tacticsById: TacticsById;
};

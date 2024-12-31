import * as yup from 'yup';
import { BasicTacticValue, basicTacticSchema } from './basic';
import {
  BreathingExerciseTacticValue,
  breathingExerciseTacticSchema,
} from './breathingExercise';
import { LinkTacticValue, linkTacticSchema } from './link';
import { NotifyAContactValue, notifyAContactSchema } from './notifyContact';
import {
  NotifySupportGroupValue,
  notifySupportGroupSchema,
} from './notifySupportGroup';
import { StepsTacticValue, stepsTacticSchema } from './steps';
import { VideoTacticValue, videoTacticSchema } from './video';

// export * from './behavior';
export * from './basic';
export * from './breathingExercise';
export * from './link';
export * from './notifyContact';
export * from './notifySupportGroup';
export * from './steps';
export * from './utils';
export * from './video';

export type TacticValue =
  | BreathingExerciseTacticValue
  | NotifyAContactValue
  | StepsTacticValue
  | BasicTacticValue
  | VideoTacticValue
  | NotifySupportGroupValue
  | LinkTacticValue;
// | UrgeSurfingTacticValue
// | EmotionsTacticValue
// | DayReviewTacticValue
// | RecapTacticValue;

// Utility to dynamically select the correct schema based on the tactic type
export const tacticSchemas: Record<
  TacticValue['type'],
  yup.ObjectSchema<TacticValue>
> = {
  breathingExercise: breathingExerciseTacticSchema,
  notifyASupportPerson: notifyAContactSchema,
  notifySupportGroup: notifySupportGroupSchema,
  basic: basicTacticSchema,
  link: linkTacticSchema,
  video: videoTacticSchema,
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
}) as yup.Lazy<TacticTypes[TacticValue['type']]>;

// / This type represents the union of all possible validated tactic objects
export type TacticTypes = {
  [K in TacticValue['type']]: yup.InferType<(typeof tacticSchemas)[K]>;
};

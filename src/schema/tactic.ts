import * as yup from 'yup';
import { recordingSchema } from './recording';
import { optionalStringArray, requiredStringArray } from './utils/array';
import { imageSchema } from './utils/image';
import { optionalTimestampSchema } from './utils/timestamp';

// Define a base schema for TacticValueBase with generic type K to accommodate the type field.
function tacticValueBaseSchema<K extends string>(type: K) {
  return yup.object({
    type: yup.mixed<K>().oneOf([type]).defined(),
    uid: yup.string().nullable(),
    sourceId: yup.string(),
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    title: yup.string().required(),
    subtitle: yup.string().notRequired(),
    description: yup.string().nullable(),
    image: imageSchema.optional().nullable(),
    backgroundColor: yup.string().required(),
    isTemplate: yup.boolean().nullable(),
    language: yup.string().nullable(),
    href: yup.string().url().nullable(),
    categoryIds: yup.array().of(yup.string()).nullable(),
    isShared: yup.boolean().nullable(),
    isResponseRequired: yup.boolean().nullable(),
    timerSeconds: yup.number().notRequired(),
    isAvailableForRecommendation: yup.boolean().nullable(),
    numberOfLikes: yup.number().nullable(),
    isSuggested: yup.boolean(),
  });
}

// These tactics can contain other tactics. We need to exclude these from the NonRecursiveTactic
// type, which can then be used to define the FolderTacticValue and RecapTacticValue types.
export type NonRecursiveTactic = Exclude<
  TacticValue,
  FolderTacticValue | RecapTacticValue
>;

export const folderTacticSchema = tacticValueBaseSchema('folder').shape({
  tacticIds: requiredStringArray,
  suggestedTacticIds: optionalStringArray,
  // We can simply keep incrementing this number to show different tactics
  currentTacticIndex: yup.number().required(),
  // For now, we don't specify the tactic schema here, as it would lead to recursion
  tacticsById: yup.object().required(),
  autogenerate: yup.boolean(),
});
export type FolderTacticValue = Omit<
  yup.InferType<typeof folderTacticSchema>,
  'tacticsById'
> & {
  tacticsById: Record<string, NonRecursiveTactic>;
};

export const recapTacticSchema = tacticValueBaseSchema('recap').shape({
  tacticId: yup.string().required(),
  // While a little "redundant" as we only have one tactic, keeping this "tacticsById" makes it
  // easier to update all documents that have a "tacticsById" field that contains a certain tactic.
  tacticsById: yup.object().required(),
});
export type RecapTacticValue = Omit<
  yup.InferType<typeof recapTacticSchema>,
  'tacticsById'
> & {
  tacticsById: Record<string, NonRecursiveTactic>;
};

export const stepsTacticSchema = tacticValueBaseSchema('steps').shape({
  steps: yup.number().required(),
});
export type StepsTacticValue = yup.InferType<typeof stepsTacticSchema>;

export const emotionsTacticSchema = tacticValueBaseSchema('emotions');
export type EmotionsTacticValue = yup.InferType<typeof emotionsTacticSchema>;

export const audioTacticSchema = tacticValueBaseSchema('audio').shape({
  recording: recordingSchema.required(),
});
export type AudioTacticValue = yup.InferType<typeof audioTacticSchema>;

export const videoTacticSchema = tacticValueBaseSchema('video').shape({
  video: yup
    .object({
      url: yup.string().url().nullable(),
      storagePath: yup.string().nullable(),
      title: yup.string().required(),
      description: yup.string().required(),
      thumbnailUrl: yup.string().url().required(),
      duration: yup.number().required(),
    })
    .required(),
});
export type VideoTacticValue = yup.InferType<typeof videoTacticSchema>;

export const measureSliderTacticSchema = tacticValueBaseSchema(
  'measure-slider'
).shape({
  lowEmoji: yup.string().notRequired(),
  highEmoji: yup.string().notRequired(),
});

export type MeasureSliderTacticValue = yup.InferType<
  typeof measureSliderTacticSchema
>;

export const measureTimeTacticSchema = tacticValueBaseSchema('measure-time');
export type MeasureTimeTacticValue = yup.InferType<
  typeof measureTimeTacticSchema
>;

export const measureCounterTacticSchema =
  tacticValueBaseSchema('measure-counter');
export type MeasureCounterTacticValue = yup.InferType<
  typeof measureCounterTacticSchema
>;

export type MeasureTacticValue =
  | MeasureSliderTacticValue
  | MeasureTimeTacticValue
  | MeasureCounterTacticValue;

export const phoneTacticSchema = tacticValueBaseSchema('phone').shape({
  supportGroupId: yup.string().required(),
  trigger: yup.mixed().oneOf(['automatic', 'manual']).required(),
});
export type PhoneTacticValue = yup.InferType<typeof phoneTacticSchema>;

export const breatheTacticSchema = tacticValueBaseSchema('breathe').shape({
  inFor: yup.number().positive().required(),
  holdFor: yup.number().positive().required(),
  outFor: yup.number().positive().required(),
  repeat: yup.number().positive().notRequired(),
});
export type BreatheTacticValue = yup.InferType<typeof breatheTacticSchema>;

export const urgeSurfingTacticSchema = tacticValueBaseSchema(
  'urge-surfing'
).shape({});
export type UrgeSurfingTacticValue = yup.InferType<
  typeof urgeSurfingTacticSchema
>;

export const taskTacticSchema = tacticValueBaseSchema('task');
export type TaskTacticValue = yup.InferType<typeof taskTacticSchema>;

export const questionTacticSchema = tacticValueBaseSchema('question');
export type QuestionTacticValue = yup.InferType<typeof questionTacticSchema>;

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
  | EmotionsTacticValue
  | RecapTacticValue;

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
  recap: recapTacticSchema,
  emotions: emotionsTacticSchema,
} as any;

// This is what's used to validate tactics in our database. We set an explicit return type to ensure
// that the conditional validation of only type doesn't infer that a tactic may only be an object
// with only the "type" field specified. Instead, we say that it always returns a validator for the
// known tactic types.
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

export const tacticColors = [
  '#20303C',
  '#43515C',
  '#66737C',
  '#858F96',
  '#A3ABB0',
  '#4196E0',
  '#459FED',
  '#57a8ef',
  '#8fc5f4',
  '#32BABC',
  '#3CC7C5',
  '#64D4D2',
  '#8BDFDD',
  '#32B76C',
  '#65C888',
  '#84D3A0',
  '#A3DEB8',
  '#FAA030',
  '#FAAD4D',
  '#FBBD71',
  '#FCCE94',
  '#E66A4E',
  '#F27052',
  '#F37E63',
  '#F7A997',
  '#EE2C38',
  '#F2564D',
  '#F57871',
  '#F79A94',
  '#A0138E',
  '#B13DAC',
  '#C164BD',
  '#D08BCD',
];

// Export type guard functions for each tactic type
export const isStepsTactic = ({ type }: TacticValue) => type === 'steps';
export const isEmotionsTactic = ({ type }: TacticValue) => type === 'emotions';
export const isAudioTactic = ({ type }: TacticValue) => type === 'audio';
export const isVideoTactic = ({ type }: TacticValue) => type === 'video';
export const isMeasureSliderTactic = ({ type }: TacticValue) =>
  type === 'measure-slider';
export const isMeasureTimeTactic = ({ type }: TacticValue) =>
  type === 'measure-time';
export const isFolderTactic = ({ type }: TacticValue) => type === 'folder';
export const isMeasureCounterTactic = ({ type }: TacticValue) =>
  type === 'measure-counter';
export const isPhoneTacticValue = ({ type }: TacticValue) => type === 'phone';
export const isBreatheTactic = ({ type }: TacticValue) => type === 'breathe';
export const isTaskTactic = ({ type }: TacticValue) => type === 'task';
export const isQuestionTactic = ({ type }: TacticValue) => type === 'question';
export const isRecapTactic = ({ type }: TacticValue) => type === 'recap';

export type WithTacticsById<T, TT = TacticValue> = Omit<T, 'tacticsById'> & {
  tacticsById: Record<string, TT>;
};

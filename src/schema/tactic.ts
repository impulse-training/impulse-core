import * as yup from 'yup';
import { recordingSchema } from './recording';
import { imageValueSchema } from './utils/image';
import { timestampSchema } from './utils/timestamp';

// Define a base schema for TacticValueBase with generic type K to accommodate the type field.
function tacticValueBaseSchema<K extends string>(type: K) {
  return yup.object({
    type: yup.mixed<K>().oneOf([type]).defined(),
    uid: yup.string().nullable(),
    ordinal: yup.number().nullable(),
    isSuggested: yup.boolean().nullable(),
    createdAt: timestampSchema.required(),
    updatedAt: timestampSchema.required(),
    title: yup.string().required(),
    description: yup.string().nullable(),
    image: imageValueSchema.optional().nullable(),
    backgroundColor: yup.string().nullable(),
    isTemplate: yup.boolean().nullable(),
    language: yup.string().nullable(),
    href: yup.string().url().nullable(),
    categoryIds: yup.array().of(yup.string()).nullable(),
    isShared: yup.boolean().nullable(),
    isResponseRequired: yup.boolean().nullable(),
    isAvailableForRecommendation: yup.boolean().nullable(),
  });
}

const stepsTacticSchema = tacticValueBaseSchema('steps').shape({
  steps: yup.number().required(),
});
export type StepsTactic = yup.InferType<typeof stepsTacticSchema>;

const audioTacticSchema = tacticValueBaseSchema('audio').shape({
  metadata: recordingSchema.required(),
  recording: recordingSchema.nullable(),
});
export type AudioTactic = yup.InferType<typeof audioTacticSchema>;

const videoTacticSchema = tacticValueBaseSchema('video').shape({
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
export type VideoTactic = yup.InferType<typeof videoTacticSchema>;

const measureSlidersTacticSchema = tacticValueBaseSchema(
  'measure-sliders'
).shape({
  rows: yup
    .array()
    .of(
      yup.object({
        key: yup.string().required(),
        label: yup.string().required(),
        value: yup.number().nullable(),
        lowEmoji: yup.string().required(),
        highEmoji: yup.string().required(),
      })
    )
    .required(),
});
export type MeasureSlidersTactic = yup.InferType<
  typeof measureSlidersTacticSchema
>;

const measureTimeTacticSchema = tacticValueBaseSchema('measure-time');
export type MeasureTimeTactic = yup.InferType<typeof measureTimeTacticSchema>;

const measureCounterTacticSchema = tacticValueBaseSchema('measure-counter');
export type MeasureCounterTactic = yup.InferType<
  typeof measureCounterTacticSchema
>;

export type MeasureTactic =
  | MeasureSlidersTactic
  | MeasureTimeTactic
  | MeasureCounterTactic;

const folderTacticSchema = tacticValueBaseSchema('folder').shape({
  tacticIds: yup.array().of(yup.string()).required(),
  tacticsById: yup.object().nullable(),
});
export type FolderTactic = yup.InferType<typeof folderTacticSchema>;

const phoneTacticSchema = tacticValueBaseSchema('phone').shape({
  supportGroupId: yup.string().required(),
  trigger: yup.mixed().oneOf(['automatic', 'manual']).required(),
});
export type PhoneTacticValue = yup.InferType<typeof phoneTacticSchema>;

const timerTacticSchema = tacticValueBaseSchema('timer').shape({
  timerSeconds: yup.number().required(),
});
export type TimerTactic = yup.InferType<typeof timerTacticSchema>;

const breatheTacticSchema = tacticValueBaseSchema('breathe').shape({
  inFor: yup.number().positive().required(),
  holdFor: yup.number().positive().required(),
  outFor: yup.number().positive().required(),
  repeat: yup.number().positive().required(),
});
export type BreatheTactic = yup.InferType<typeof breatheTacticSchema>;

const optionsTacticSchema = tacticValueBaseSchema('options').shape({
  tacticIds: yup.array().of(yup.string()).required(),
  tacticsById: yup.object().required(),
});
export type OptionsTactic = yup.InferType<typeof optionsTacticSchema>;

const taskTacticSchema = tacticValueBaseSchema('task');
export type TaskTactic = yup.InferType<typeof taskTacticSchema>;

const questionTacticSchema = tacticValueBaseSchema('question');
export type QuestionTactic = yup.InferType<typeof questionTacticSchema>;

export type TacticValue =
  | PhoneTacticValue
  | AudioTactic
  | VideoTactic
  | QuestionTactic
  | TaskTactic
  | TimerTactic
  | FolderTactic
  | MeasureTactic
  | OptionsTactic
  | BreatheTactic
  | StepsTactic;

// Utility to dynamically select the correct schema based on the tactic type
const tacticSchemas: Record<
  TacticValue['type'],
  yup.ObjectSchema<TacticValue>
> = {
  phone: phoneTacticSchema,
  audio: audioTacticSchema,
  video: videoTacticSchema,
  question: questionTacticSchema,
  'measure-sliders': measureSlidersTacticSchema,
  'measure-time': measureTimeTacticSchema,
  'measure-counter': measureCounterTacticSchema,
  timer: timerTacticSchema,
  folder: folderTacticSchema,
  options: optionsTacticSchema,
  breathe: breatheTacticSchema,
  steps: stepsTacticSchema,
  task: taskTacticSchema,
} as any;

// Export all schema so they can be used elsewhere in the application
export {
  audioTacticSchema,
  breatheTacticSchema,
  folderTacticSchema,
  measureCounterTacticSchema,
  measureSlidersTacticSchema,
  measureTimeTacticSchema,
  optionsTacticSchema,
  phoneTacticSchema,
  questionTacticSchema,
  stepsTacticSchema,
  tacticSchemas,
  taskTacticSchema,
  timerTacticSchema,
  videoTacticSchema,
};

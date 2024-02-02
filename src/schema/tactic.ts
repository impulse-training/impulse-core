import * as yup from 'yup';
import { recordingSchema } from './recording';
import { imageSchema } from './utils/image';
import { timestampSchema } from './utils/timestamp';

// Define a base schema for TacticValueBase with generic type K to accommodate the type field.
function tacticValueBaseSchema<K extends string>(type: K) {
  return yup.object({
    type: yup.mixed<K>().oneOf([type]).defined(),
    uid: yup.string().nullable(),
    ordinal: yup.number().nullable(),
    createdAt: timestampSchema.required(),
    updatedAt: timestampSchema.required(),
    title: yup.string().required(),
    description: yup.string().nullable(),
    image: imageSchema.optional().nullable(),
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

const emotionsTacticSchema = tacticValueBaseSchema('emotions');
export type EmotionsTactic = yup.InferType<typeof emotionsTacticSchema>;

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
  | StepsTactic
  | EmotionsTactic;

export const tacticSchema = yup.lazy(value => {
  switch (value.type) {
    case 'phone':
      return phoneTacticSchema;
    case 'audio':
      return audioTacticSchema;
    case 'video':
      return videoTacticSchema;
    case 'question':
      return questionTacticSchema;
    case 'measure-sliders':
      return measureSlidersTacticSchema;
    case 'measure-time':
      return measureTimeTacticSchema;
    case 'measure-counter':
      return measureCounterTacticSchema;
    case 'timer':
      return timerTacticSchema;
    case 'folder':
      return folderTacticSchema;
    case 'options':
      return optionsTacticSchema;
    case 'breathe':
      return breatheTacticSchema;
    case 'steps':
      return stepsTacticSchema;
    case 'emotions':
      return emotionsTacticSchema;
    case 'task':
      return taskTacticSchema;
    default:
      throw new yup.ValidationError(`Unknown type: ${value.type}`);
  }
});

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
  emotions: emotionsTacticSchema,
} as any;

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

// Export all schema so they can be used elsewhere in the application
export {
  audioTacticSchema,
  breatheTacticSchema,
  emotionsTacticSchema,
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

export type WithTacticsById<T> = Omit<T, 'tacticsById'> & {
  tacticsById: Record<string, TacticValue>;
};

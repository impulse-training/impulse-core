import * as yup from 'yup';
import { questionSchema } from '../question';
import { tacticSchema } from '../tactic';
import { fileSchema } from '../utils/file';
import { optionalObjectOf } from '../utils/objectOf';
import { optionalTimestampSchema, timestampSchema } from '../utils/timestamp';
import { questionDataSchema } from './utils/questionData';

export function logBaseSchema<K extends string>(type: K) {
  return yup.object({
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    profileId: yup.string().required(),

    audioFile: fileSchema.optional(),
    audioDurationSeconds: yup.number(),
    audioWaveform: yup.string(),

    questionsById: optionalObjectOf(questionSchema),
    questionData: optionalObjectOf(questionDataSchema),
    submittedAt: optionalTimestampSchema,

    text: yup.string(),
    type: yup.mixed<K>().oneOf([type]).defined(),
    date: timestampSchema,
    dateString: yup.string().required(),
    profileEmojiIDString: yup.string(),
    tacticId: yup.string().nullable(),
    tactic: yup.lazy((_value, options) => {
      // Access the context to get the entire object being validated
      const { tacticId } = options.parent;
      // Check if tacticId is defined, then apply tacticSchema
      if (tacticId) return tacticSchema;
      // If tacticId is not defined, tactic is not required
      return yup.mixed().notRequired();
    }),
    // For now, we don't type this object, but it's used to store metadata like the pedometer step
    // count at the time of activating the tactic, in the case of the steps tactic
    tacticData: optionalObjectOf(yup.mixed()),
    // For now, put this boolean flag here to indicate if the sender is GPT
    isGptSender: yup.boolean(),
    senderProfileId: yup.string().nullable(),
    // views: yup.array().of(logViewSchema),
  });
}

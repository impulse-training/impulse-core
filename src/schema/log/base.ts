import * as yup from 'yup';
import { fileSchema } from '../utils/file';
import { optionalObjectOf } from '../utils/objectOf';
import { optionalTimestampSchema, timestampSchema } from '../utils/timestamp';
import { behaviorAndBehaviorDataSchema } from './utils/behaviorData';
import { emotionDataSchema } from './utils/emotionData';

export function logBaseSchema<K extends string>(type: K) {
  return yup.object({
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    type: yup.mixed<K>().oneOf([type]).defined(),
    uid: yup.string().required(),
    audioFile: fileSchema.optional().default(undefined),

    // We deal with emotions and behaviors separately
    emotionData: optionalObjectOf(emotionDataSchema),
    behaviorData: optionalObjectOf(behaviorAndBehaviorDataSchema),
    text: yup.string().nullable(),
    date: timestampSchema,
    dateString: yup.string().required(),

    role: yup
      .mixed<'user' | 'assistant' | 'system' | 'tool'>()
      .oneOf(['assistant', 'user', 'system', 'tool'])
      .required(),

    // tacticId: yup.string().nullable(),
    // tactic: yup.lazy((_value, options) => {
    //   // Access the context to get the entire object being validated
    //   const { tacticId } = options.parent;
    //   // Check if tacticId is defined, then apply tacticSchema
    //   if (tacticId) return tacticSchema;
    //   // If tacticId is not defined, tactic is not required
    //   return yup.mixed().notRequired();
    // }),
    // // For now, we don't type this object, but it's used to store metadata like the pedometer step
    // // count at the time of activating the tactic, in the case of the steps tactic
    // tacticData: optionalObjectOf(yup.mixed()),

    senderUid: yup.string().nullable(),
  });
}

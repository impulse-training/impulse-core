import * as yup from 'yup';
import { tacticSchema } from '../strategy';
import { optionalObjectOf } from '../utils/objectOf';
import { optionalTimestampSchema, timestampSchema } from '../utils/timestamp';
import { gptResponseMixin } from './utils/gpt';

const logViewSchema = yup.object({
  openTime: timestampSchema,
  closeTime: timestampSchema,
});

export function logBaseSchema<K extends string>(type: K) {
  return yup.object({
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    profileId: yup.string().required(),
    text: yup.string(),
    type: yup.mixed<K>().oneOf([type]).defined(),
    date: timestampSchema,
    dateString: yup.string().required(),
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
    views: yup.array().of(logViewSchema),
    ...gptResponseMixin,
  });
}

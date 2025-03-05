import * as yup from 'yup';
import { fileSchema } from '../utils/file';
import { optionalObjectOf } from '../utils/objectOf';
import { optionalTimestampSchema, timestampSchema } from '../utils/timestamp';
import { behaviorAndBehaviorDataSchema } from './utils/behaviorData';
import { metricAttributeAndDataSchema } from './utils/metricData';
import { tacticAndMetadata } from './utils/tacticData';

export function logBaseSchema<K extends string>(type: K) {
  return yup.object({
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    type: yup.mixed<K>().oneOf([type]).defined(),
    uid: yup.string().required(),
    audioFile: fileSchema.optional().default(undefined),

    // This is set to false for tool call logs, etc
    isDisplayable: yup.boolean().required(),
    // When explicitly set to true, we'll force Zara not to respond
    skipGptResponse: yup.boolean(),

    // We deal with metrics and behaviors separately
    metricData: optionalObjectOf(metricAttributeAndDataSchema),
    behaviorData: optionalObjectOf(behaviorAndBehaviorDataSchema),
    tacticsData: optionalObjectOf(tacticAndMetadata),

    text: yup.string().nullable(),
    date: timestampSchema,
    dateString: yup.string().required(),

    senderUid: yup.string().nullable(),
    senderName: yup.string().nullable(),
  });
}

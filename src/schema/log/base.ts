import * as yup from 'yup';
import { fileSchema } from '../utils/file';
import { optionalObjectOf } from '../utils/objectOf';
import { optionalTimestampSchema, timestampSchema } from '../utils/timestamp';
import { behaviorAndBehaviorDataSchema } from './utils/behaviorData';
import { metricAttributeAndDataSchema } from './utils/metricData';
import { tacticsById } from './utils/tacticData';

export function logBaseSchema<K extends string>(type: K) {
  return yup.object({
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    type: yup.mixed<K>().oneOf([type]).defined(),
    uid: yup.string().required(),
    audioFile: fileSchema.optional().default(undefined),

    // We deal with metrics and behaviors separately
    metricData: optionalObjectOf(metricAttributeAndDataSchema),
    behaviorData: optionalObjectOf(behaviorAndBehaviorDataSchema),
    tacticsData: tacticsById.optional(),

    text: yup.string().nullable(),
    transcript: yup.string(),
    transcribedLocally: yup.boolean(),
    date: timestampSchema,
    dateString: yup.string().required(),

    senderUid: yup.string().nullable(),
    senderName: yup.string().nullable(),
  });
}

import * as yup from 'yup';
import { optionalStringArray } from '../utils/array';
import { fileSchema } from '../utils/file';
import { optionalObjectOf } from '../utils/objectOf';
import { optionalTimestampSchema } from '../utils/timestamp';

// Define a base schema for TacticValueBase with generic type K to accommodate the type field.
export function tacticValueBaseSchema<K extends string>(type: K) {
  return yup.object({
    profileId: yup.string(),
    recommendedForIssueIds: optionalStringArray.max(
      10,
      "can't be more than 10"
    ),
    sharedWithIssueIds: optionalStringArray,
    recommendedForIssueOrdinals: optionalObjectOf(yup.number().required()),
    ordinal: yup.number().required(),
    prompt: yup.string(),
    isShared: yup.boolean(),
    description: yup.string().nullable(),
    type: yup.mixed<K>().oneOf([type]).defined(),
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    pastTenseTitle: yup.string(),
    debriefAfterMinutes: yup.number().nullable(),
    image: fileSchema.optional().nullable(),
    backgroundColor: yup.string(),
    setbackThreshold: yup.number().nullable(),
    likesCount: yup.number().nullable(),
    timerSeconds: yup.number().notRequired(),
    isSuggested: yup.boolean(),
  });
}

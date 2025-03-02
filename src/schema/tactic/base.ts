import * as yup from 'yup';
import { optionalStringArray } from '../utils/array';
import { fileSchema } from '../utils/file';
import { documentReferenceSchema } from '../utils/firestore';
import { optionalTimestampSchema } from '../utils/timestamp';

// Define a base schema for TacticValueBase with generic type K to accommodate the type field.
export function tacticBaseSchema<K extends string>(type: K) {
  return yup.object({
    uid: yup.string(),
    recommendedForIssueIds: optionalStringArray.max(
      10,
      "can't be more than 10"
    ),
    sourceFile: documentReferenceSchema,
    // sharedWithIssueIds: optionalStringArray,
    // recommendedForIssueOrdinals: optionalObjectOf(yup.number().required()),
    isDemoTactic: yup.boolean(),
    prompt: yup.string(),
    isShared: yup.boolean(),
    description: yup.string().nullable(),
    type: yup.mixed<K>().oneOf([type]).defined(),
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    pastTenseTitle: yup.string(),
    debriefAfterMinutes: yup.number().nullable(),
    image: fileSchema.optional().default(undefined),
    backgroundColor: yup.string(),
    likesCount: yup.number().nullable(),
    timerSeconds: yup.number().notRequired(),
    isSuggested: yup.boolean(),
  });
}

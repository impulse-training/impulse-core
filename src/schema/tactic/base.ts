import * as yup from 'yup';
import { optionWithStrategiesPathSchema } from '../option';
import { imageSchema } from '../utils/image';
import { optionalObjectOf } from '../utils/objectOf';
import { optionalTimestampSchema } from '../utils/timestamp';

// Define a base schema for TacticValueBase with generic type K to accommodate the type field.
export function tacticValueBaseSchema<K extends string>(type: K) {
  return yup.object({
    type: yup.mixed<K>().oneOf([type]).defined(),
    profileId: yup.string().nullable(),
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    ordinal: yup.number().required(),
    title: yup.string().required('is required'),
    commentCount: yup.number().required(),
    description: yup.string().nullable(),
    debriefAfterMinutes: yup.number().nullable(),
    image: imageSchema.optional().nullable(),
    setbackThreshold: yup.number().nullable(),
    optionsById: optionalObjectOf(optionWithStrategiesPathSchema),
    backgroundColor: yup.string(),
    language: yup.string().nullable(),
    linkUrl: yup.string().url().nullable(),
    likesCount: yup.number().nullable(),
    timerSeconds: yup.number().notRequired(),
    isSuggested: yup.boolean(),
  });
}

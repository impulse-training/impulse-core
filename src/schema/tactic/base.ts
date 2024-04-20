import * as yup from 'yup';
import { optionSchema } from '../option';
import { imageSchema } from '../utils/image';
import { optionalObjectOf } from '../utils/objectOf';
import { optionalTimestampSchema } from '../utils/timestamp';

// Define a base schema for TacticValueBase with generic type K to accommodate the type field.
export function tacticValueBaseSchema<K extends string>(type: K) {
  return yup.object({
    type: yup.mixed<K>().oneOf([type]).defined(),
    profileId: yup.string().nullable(),
    sourceId: yup.string(),
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    title: yup.string().required('is required'),
    subtitle: yup.string().notRequired(),
    description: yup.string().nullable(),
    image: imageSchema.optional().nullable(),
    setbackThreshold: yup.number().nullable(),
    optionsById: optionalObjectOf(optionSchema),
    backgroundColor: yup.string().required(),
    isTemplate: yup.boolean().nullable(),
    language: yup.string().nullable(),
    href: yup.string().url().nullable(),
    categoryIds: yup.array().of(yup.string()).nullable(),
    isShared: yup.boolean().nullable(),
    isResponseRequired: yup.boolean().nullable(),
    timerSeconds: yup.number().notRequired(),
    isAvailableForRecommendation: yup.boolean().nullable(),
    numberOfLikes: yup.number().nullable(),
    isSuggested: yup.boolean(),
  });
}

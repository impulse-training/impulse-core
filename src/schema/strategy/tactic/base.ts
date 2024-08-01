import * as yup from 'yup';
import { fileSchema } from '../../utils/file';
import { optionalTimestampSchema } from '../../utils/timestamp';
import strategyBase from '../base';

// Define a base schema for TacticValueBase with generic type K to accommodate the type field.
export function tacticValueBaseSchema<K extends string>(type: K) {
  return strategyBase().shape({
    type: yup.mixed<K>().oneOf([type]).defined(),
    profileId: yup.string().nullable(),
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

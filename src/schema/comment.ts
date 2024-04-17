import * as yup from 'yup';
import { recordingSchema } from './recording';
import { imageSchema } from './utils/image';
import { optionalTimestampSchema } from './utils/timestamp';

export const commentSchema = yup.object().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  tacticId: yup.string().nullable(),
  tacticTitle: yup.string().nullable(),
  text: yup.string().optional(),
  profileId: yup.string().required(),
  recording: recordingSchema.optional(),
  isEdited: yup.boolean().optional(),
  avatar: imageSchema.optional(),
});
export type CommentValue = yup.InferType<typeof commentSchema>;

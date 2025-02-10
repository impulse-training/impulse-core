import * as yup from 'yup';
import { logBaseSchema } from './base';

export const userLogSchema = logBaseSchema('user').shape({
  role: yup.mixed<'user'>().oneOf(['user']).required(),
  // The user can send audio messages, which may be transcribed on their device, or, as a fallback,
  // in the cloud
  audioTranscript: yup.string(),
  audioTranscribedLocally: yup.boolean(),
});
export type UserLogValue = yup.InferType<typeof userLogSchema>;

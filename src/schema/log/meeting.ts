import * as yup from 'yup';
import { logBaseSchema } from './base';

export const meetingLogSchema = logBaseSchema('meeting').shape({
  mentorName: yup.string().required(),
  mentorAvatarUrl: yup.string().required(),
});

export type MeetingLogValue = yup.InferType<typeof meetingLogSchema>;

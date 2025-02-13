import * as yup from 'yup';
import { logBaseSchema } from './base';

export const meetingLogSchema = logBaseSchema('meeting').shape({});
export type MeetingLogValue = yup.InferType<typeof meetingLogSchema>;

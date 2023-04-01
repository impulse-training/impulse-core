import { Timestamp } from '../utils/Timestamp';

export interface FeedbackValue {
  uid: string;
  createdAt: Timestamp;
  recordingPath?: string;
  suggestion: string;
  isPublic: boolean;
}

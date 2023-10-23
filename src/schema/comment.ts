import { FakeTimestamp } from '../utils/FakeTimestamp';
import { Recording } from './recording';

export interface CommentValue {
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
  tacticId?: string | null;
  text?: string;
  uid: string;
  authorName: string;
  recording?: Recording;
  isEdited?: boolean;
}

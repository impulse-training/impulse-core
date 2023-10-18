import { FakeTimestamp } from '../utils/FakeTimestamp';
import { Recording } from './recording';

export interface CommentValue {
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
  text?: string;
  author: {
    uid: string;
    name: string;
  };
  recording?: Recording;
  isEdited?: boolean;
}

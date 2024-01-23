import { TimestampLike } from '../utils/TimestampLike';
import { Image } from '../utils/image';
import { Recording } from './recording';

export interface CommentValue {
  createdAt: TimestampLike;
  updatedAt: TimestampLike;
  tacticId?: string | null;
  text?: string;
  uid: string;
  authorName: string;
  recording?: Recording;
  isEdited?: boolean;
  avatar?: Image;
}

import { TimestampLike } from '../utils/TimestampLike';
export interface PressValue {
    uid: string;
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    impulseId: string;
    buttonId: string;
    pressedAt: TimestampLike;
}

import { TimestampLike } from '../utils/TimestampLike';
export interface ButtonValue {
    uid: string;
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    buttonId: string;
    source: 'manual';
}

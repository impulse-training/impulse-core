import { TimestampLike } from '../utils/TimestampLike';
export interface InvitationValue {
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    fromName: string;
    toName: string;
    message: string;
}

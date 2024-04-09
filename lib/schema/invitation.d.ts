import { TimestampLike } from '../utils/firestore/TimestampLike';
export interface InvitationValue {
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    fromName: string;
    toName: string;
    message: string;
}

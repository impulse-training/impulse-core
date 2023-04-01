import { Timestamp } from '../utils/Timestamp';
export interface InvitationValue {
    createdAt: Timestamp;
    fromName: string;
    toName: string;
    message: string;
}

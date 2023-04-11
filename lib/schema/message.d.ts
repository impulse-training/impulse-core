import { Timestamp } from '../utils/Timestamp';
export interface MessageValue {
    createdAt: Timestamp;
    updatedAt: Timestamp;
    fromUid: string;
    text: string;
}

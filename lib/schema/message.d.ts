import { Timestamp } from '../utils/Timestamp';
export interface MessageValue {
    createdAt: Timestamp;
    fromUid: string;
    text: string;
}

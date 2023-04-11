import { Timestamp } from '../utils/Timestamp';
export interface TagValue {
    uid: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    defaultSelected?: boolean;
    ordinal: number;
    name: string;
    subtext?: string;
    emoji: string;
}

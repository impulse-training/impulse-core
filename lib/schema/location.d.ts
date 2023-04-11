import { Timestamp } from '../utils/Timestamp';
export interface LocationValue {
    uid: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    name: string;
    latitude: number;
    longitude: number;
    address: string;
    reminderIds: Array<string>;
}

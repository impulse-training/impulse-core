import { ExpoPushMessage } from 'expo-server-sdk';
import { Timestamp } from '../utils/Timestamp';
export interface NotificationValue {
    uid: string;
    createdAt: Timestamp;
    key: string;
    args: Partial<ExpoPushMessage>;
}

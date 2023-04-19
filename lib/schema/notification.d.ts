import { ExpoPushMessage } from 'expo-server-sdk';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export interface NotificationValue {
    uid: string;
    createdAt: FakeTimestamp;
    updatedAt: FakeTimestamp;
    key: string;
    args: Partial<ExpoPushMessage>;
}

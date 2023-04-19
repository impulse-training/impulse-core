import { FakeTimestamp } from '../utils/FakeTimestamp';
export interface MessageValue {
    createdAt: FakeTimestamp;
    updatedAt: FakeTimestamp;
    fromUid: string;
    text: string;
}

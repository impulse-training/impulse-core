import { FakeTimestamp } from '../utils/FakeTimestamp';
export interface TagValue {
    uid: string;
    createdAt: FakeTimestamp;
    updatedAt: FakeTimestamp;
    defaultSelected?: boolean;
    ordinal: number;
    name: string;
    subtext?: string;
    emoji: string;
}

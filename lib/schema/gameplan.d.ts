import { FakeTimestamp } from '../utils/FakeTimestamp';
export interface GameplanValue {
    uid: string;
    name: string;
    isFeatured: boolean;
    createdAt: FakeTimestamp;
    updatedAt: FakeTimestamp;
}

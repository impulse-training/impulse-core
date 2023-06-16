import { FakeTimestamp } from '../utils/FakeTimestamp';
export interface LocationValue {
    uid: string;
    createdAt: FakeTimestamp;
    updatedAt: FakeTimestamp;
    name: string;
    latitude: number;
    longitude: number;
    address: string;
    gameplanIds: Array<string>;
}

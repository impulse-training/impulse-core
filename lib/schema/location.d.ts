import { TimestampLike } from '../utils/TimestampLike';
export interface LocationValue {
    uid: string;
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    name: string;
    latitude: number;
    longitude: number;
    address: string;
}

import { FakeTimestamp } from '../utils/FakeTimestamp';
import { LogValue } from './logs';
export interface MessageValue {
    createdAt: FakeTimestamp;
    updatedAt: FakeTimestamp;
    fromUid: string;
    text: string;
    href?: string;
    log?: LogValue;
}

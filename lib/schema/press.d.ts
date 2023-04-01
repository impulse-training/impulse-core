import { Timestamp } from '../utils/Timestamp';
export interface PressValue {
    uid: string;
    createdAt: Timestamp;
    impulseId: string;
    buttonId: string;
    pressedAt: Timestamp;
}

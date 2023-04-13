import { Timestamp } from '../utils/Timestamp';
export interface ShipmentValue {
    createdAt: Timestamp;
    updatedAt: Timestamp;
    uid: string;
    trackingUrl: string;
    trackingNumber: string;
    estimatedDeliveryDate: Timestamp;
}

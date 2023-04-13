import { Timestamp } from '../utils/Timestamp';

// We currently don't have any kind of indication of SKU or order etc, as we only have one product.
export interface ShipmentValue {
  createdAt: Timestamp;
  updatedAt: Timestamp;
  uid: string;
  trackingUrl: string;
  trackingNumber: string;
  estimatedDeliveryDate: Timestamp;
}

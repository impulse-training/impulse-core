import { Timestamp } from '../utils/Timestamp';

export interface ApplicationValue {
  createdAt: Timestamp;
  updatedAt: Timestamp;
  dateOfBirth: string;
  state: 'pending' | 'approved' | 'shipped' | 'signedUp';
  email: string;
  duration: string;
  gender: string;
  location: string;
  message: string;
  name: string;
  phone: string;
  trackingUrl?: string;
  estimatedDeliveryDate?: Timestamp;
}

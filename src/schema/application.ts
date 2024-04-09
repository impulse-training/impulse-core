import { TimestampLike } from '../utils/firestore/TimestampLike';

export interface ApplicationValue {
  createdAt: TimestampLike;
  updatedAt: TimestampLike;
  state: 'pending' | 'approved' | 'shipped' | 'signedUp';
  email: string;
  name: string;
  phone: string;

  dateOfBirth?: string;
  duration?: string;
  message?: string;
  trackingUrl?: string;
  estimatedDeliveryDate?: TimestampLike;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  zipCode?: string;
  country?: string;
  shippingLabelUrl?: string;
  supportGroupId?: string;
}

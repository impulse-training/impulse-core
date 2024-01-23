import { TimestampLike } from '../utils/TimestampLike';
export interface ApplicationValue {
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    dateOfBirth: string;
    state: 'pending' | 'approved' | 'shipped' | 'signedUp';
    email: string;
    duration: string;
    message: string;
    name: string;
    phone: string;
    trackingUrl?: string;
    estimatedDeliveryDate?: TimestampLike;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    zipCode: string;
    country: string;
    shippingLabelUrl?: string;
}

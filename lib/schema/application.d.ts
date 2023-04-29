import { FakeTimestamp } from '../utils/FakeTimestamp';
export interface ApplicationValue {
    createdAt: FakeTimestamp;
    updatedAt: FakeTimestamp;
    dateOfBirth: string;
    state: 'pending' | 'approved' | 'shipped' | 'signedUp';
    email: string;
    duration: string;
    message: string;
    name: string;
    phone: string;
    trackingUrl?: string;
    estimatedDeliveryDate?: FakeTimestamp;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    zipCode: string;
    country: string;
    shippingLabelUrl?: string;
}

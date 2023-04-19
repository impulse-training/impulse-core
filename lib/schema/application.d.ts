import { FakeTimestamp } from '../utils/FakeTimestamp';
export interface ApplicationValue {
    createdAt: FakeTimestamp;
    updatedAt: FakeTimestamp;
    dateOfBirth: string;
    state: 'pending' | 'approved' | 'shipped' | 'signedUp';
    email: string;
    duration: string;
    location: string;
    message: string;
    name: string;
    phone: string;
    trackingUrl?: string;
    estimatedDeliveryDate?: FakeTimestamp;
}

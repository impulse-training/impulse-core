import { AppStateStatus } from 'react-native';
import { Timestamp } from '../utils/Timestamp';
export interface ProfileValue {
    uid: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    buttonId?: string;
    isAdmin?: boolean;
    isSuperAdmin?: boolean;
    activeImpulseId?: string;
    email: string;
    currentAppState?: AppStateStatus;
    showStorybook?: boolean;
    lastActiveAt?: Timestamp;
    expoPushToken?: string;
    releaseChannel?: 'default' | 'canary';
    isCurrentlyTrackingMotion?: boolean;
    displayName?: string;
    firstName?: string;
    lastName?: string;
    nickName?: string;
    region?: string | null;
    timezone?: string;
    isReadyForTour?: boolean;
    isTourCompleted?: boolean;
    isButtonSetupSkipped?: boolean;
    invitationCode: string;
}

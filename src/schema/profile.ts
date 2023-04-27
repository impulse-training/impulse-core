import { AppStateStatus, Permission } from 'react-native';
import { FakeTimestamp } from '../utils/FakeTimestamp';

export interface ProfileValue {
  uid: string;
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
  buttonId?: string;
  isAdmin?: boolean;
  isSuperAdmin?: boolean;
  activeImpulseId?: string;
  email: string;
  currentAppState?: AppStateStatus;
  showStorybook?: boolean;
  lastActiveAt?: FakeTimestamp;
  expoPushToken?: string;
  releaseChannel?: 'default' | 'canary';
  isCurrentlyTrackingMotion?: boolean;

  androidPermissions?: Record<Permission, boolean>;

  // While we typically expect these properties to be set, there is a short period where they are
  // unset, as firebase does not allow for creating user records with metadata (it must be set after
  // create)
  displayName?: string;
  firstName?: string;
  lastName?: string;
  nickName?: string;
  region?: string | null;
  timezone?: string;
  phoneNumber?: string;

  // We track a few flags that relate to the state of the profile and onboarding
  isReadyForTour?: boolean;
  isTourCompleted?: boolean;
  isButtonSetupSkipped?: boolean;

  invitationCode: string;
}

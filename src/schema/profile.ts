import { AppStateStatus, Permission } from 'react-native';
import { TimestampLike } from '../utils/TimestampLike';
import { Image } from '../utils/image';
import { NOTIFICATION_TYPES, NotificationOption } from './notification';

export interface ProfileValue {
  uid: string;
  createdAt: TimestampLike;
  updatedAt: TimestampLike;
  buttonId?: string;
  isAdmin?: boolean;
  isSuperAdmin?: boolean;
  activeImpulseId?: string;
  email: string;
  currentAppState?: AppStateStatus;
  showStorybook?: boolean;
  lastActiveAt?: TimestampLike;
  expoPushToken?: string;
  releaseChannel?: 'default' | 'canary';
  notificationPreferences: Partial<
    Record<keyof typeof NOTIFICATION_TYPES, Array<NotificationOption>>
  >;
  isCurrentlyTrackingMotion?: boolean;
  showTacticsFromSupportGroups?: boolean;
  androidPermissions?: Record<Permission, boolean>;
  parentIssueIds?: Array<string>;
  stepTrackingEnabled?: boolean;

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

  avatar?: Image;

  // We track a few flags that relate to the state of the profile and onboarding
  isReadyForTour?: boolean;
  isTourCompleted?: boolean;
  isButtonSetupSkipped?: boolean;

  invitationCode: string;
  impulseNotifications?: Record<string, { title: string; body: string }>;
  viewAccessGrantedTo?: Array<string>;
}

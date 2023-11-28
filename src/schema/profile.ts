import { AppStateStatus, Permission } from 'react-native';
import { FakeTimestamp } from '../utils/FakeTimestamp';
import { Image } from '../utils/image';
import { Gameplan, TimeGameplanValue } from './gameplan';
import { NOTIFICATION_TYPES, NotificationOption } from './notification';
import { TacticValue } from './tactic';

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
  notificationPreferences: Partial<
    Record<keyof typeof NOTIFICATION_TYPES, Array<NotificationOption>>
  >;
  isCurrentlyTrackingMotion?: boolean;
  showTacticsFromSupportGroups?: boolean;
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

  avatar?: Image;

  // We track a few flags that relate to the state of the profile and onboarding
  isReadyForTour?: boolean;
  isTourCompleted?: boolean;
  isButtonSetupSkipped?: boolean;

  invitationCode: string;

  // A gameplan is a set of pre-prepared tactics, as well as suggested tactics, that a user can
  // follow to help them through an impulse moment. We store these on the profile document so that
  // we can quickly copy them to a new impulse log document. We also store the last time the
  // gameplan was updated - this is primarily to prevent an infinite loop of updates when a gameplan
  // is updated.
  gameplans: Record<string, Gameplan>;
  gameplansUpdatedAt: FakeTimestamp;
  impulseNotifications?: Record<string, { title: string; body: string }>;
  viewAccessGrantedTo?: Array<string>;

  // We store a cached summary of time gameplans on the profile, which we use to set up
  // notifications
  timeGameplans?: Record<
    string,
    { gameplan: TimeGameplanValue; tactic: TacticValue }
  >;
}

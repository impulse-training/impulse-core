import { AppStateStatus, Permission } from 'react-native';
import { FakeTimestamp } from '../utils/FakeTimestamp';
import { TimeGameplanValue } from './gameplan';
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

  // We track a few flags that relate to the state of the profile and onboarding
  isReadyForTour?: boolean;
  isTourCompleted?: boolean;
  isButtonSetupSkipped?: boolean;

  invitationCode: string;

  gameplan: GameplanByPatternId;
  impulseNotifications?: Record<string, { title: string; body: string }>;

  // We store a cached summary of time gameplans on the profile, which we use to set up
  // notifications
  timeGameplans?: Record<
    string,
    { gameplan: TimeGameplanValue; tactic: TacticValue }
  >;
}

export type GameplanByPatternId = Record<
  string,
  Record<
    'impulse' | 'success' | 'setback',
    {
      tacticIds: Array<string>;
      // Some pre-prepared suggested tactics that can be pushed into the tactics array
      suggestedTacticIds: Array<string>;
    }
  >
>;

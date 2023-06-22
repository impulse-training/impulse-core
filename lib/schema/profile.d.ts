import { AppStateStatus, Permission } from 'react-native';
import { FakeTimestamp } from '../utils/FakeTimestamp';
import { TimeGameplanValue } from './gameplan';
import { NOTIFICATION_TYPES } from './notification';
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
    notificationPreferences: Partial<Record<keyof typeof NOTIFICATION_TYPES, boolean>>;
    isCurrentlyTrackingMotion?: boolean;
    showTacticsFromSupportGroups?: boolean;
    androidPermissions?: Record<Permission, boolean>;
    displayName?: string;
    firstName?: string;
    lastName?: string;
    nickName?: string;
    region?: string | null;
    timezone?: string;
    phoneNumber?: string;
    isReadyForTour?: boolean;
    isTourCompleted?: boolean;
    isButtonSetupSkipped?: boolean;
    invitationCode: string;
    gameplan: GameplanByPatternId;
    impulseNotifications?: Record<string, {
        title: string;
        body: string;
    }>;
    timeGameplans?: Record<string, {
        gameplan: TimeGameplanValue;
        tactic: TacticValue;
    }>;
}
export type GameplanByPatternId = Record<string, Record<'impulse' | 'success' | 'setback', {
    tacticIds: Array<string>;
    suggestedTacticIds: Array<string>;
}>>;

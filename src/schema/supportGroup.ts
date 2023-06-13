import { FakeTimestamp } from '../utils/FakeTimestamp';

export interface SupportGroupValue {
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
  templateId?: string;
  everythingPermissions?: boolean;
  participantUids: Array<string>;
  groupName: string;
  groupNameAliases?: Record<string, string>;
  groupDescription?: string;
  creatorName: string;
  creatorUid: string;
  icon: 'bugs' | 'team' | 'group' | 'tactics';
  thumbnailUrl: string;
  lastMessagePreview?: string;
  invitationCode?: string;
  invitationUrl?: string;
  lastMessageUid?: string;
  isSharingDisabled?: boolean;
  isTemplate?: boolean;
  // A map of
  unreadCounts: { [uid: string]: number };
  // TODO: deprecated, to remove
  permissions: SupportGroupPermissions;
  // A map of tactics that have been suggested by different participants. Suggestions can be made
  // for impulse moments, successes, or setbacks. The key is the uid of the participant who made the
  // suggestion, and the value is an array of tactic ids.
  tacticIds: {
    impulse?: Record<string, Array<string>>;
    success?: Record<string, Array<string>>;
    setback?: Record<string, Array<string>>;
  };
}

export type PermissionKey = keyof typeof CONVERSATION_PERMISSIONS;
export type SupportGroupPermissions = {
  [uid: string]: Partial<{
    [key in PermissionKey]: boolean;
  }>;
};

export const CONVERSATION_PERMISSIONS = {
  logs: 'Show my logs',
  tactics: 'Show my tactics',
  editTactics: 'Allow to edit my tactics',
  insights: 'Show my insights',
};

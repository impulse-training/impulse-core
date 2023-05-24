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
  hasTactics: boolean;
  lastMessagePreview?: string;
  invitationCode?: string;
  invitationUrl?: string;
  lastMessageUid?: string;
  isSharingDisabled?: boolean;
  isTemplate?: boolean;
  unreadCounts: { [uid: string]: number };
  permissions: SupportGroupPermissions;

  impulseTacticIds?: Record<string, Array<string>>;
  successTacticIds?: Record<string, Array<string>>;
  setbackTacticIds?: Record<string, Array<string>>;
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

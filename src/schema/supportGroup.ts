import * as yup from 'yup';
import { timestampSchema } from './utils/timestamp';

// export interface SupportGroupValue {
//   createdAt: TimestampLike;
//   updatedAt: TimestampLike;
//   templateId?: string;
//   everythingPermissions?: boolean;
//   participantUids: Array<string>;
//   groupName: string;
//   groupNameAliases?: Record<string, string>;
//   groupDescription?: string;
//   creatorName: string;
//   creatorUid: string;
//   icon: 'bugs' | 'team' | 'group' | 'tactics';
//   thumbnailUrl: string;
//   lastMessagePreview?: string;
//   invitationCode?: string;
//   invitationUrl?: string;
//   lastMessageUid?: string;
//   isSharingDisabled?: boolean;
//   isTemplate?: boolean;
//   unreadCounts: { [uid: string]: number };
//   // TODO: deprecated, to remove
//   permissions: SupportGroupPermissions;
//   // A map of tactics that have been suggested by different participants. The key is the uid of the
//   // participant who made the suggestion, and the value is an array of tactic ids.
//   suggestedTacticIds: Record<string, Array<string>>;
// }

// yup schema for SupportGroupValue
export const supportGroupValueSchema = yup.object().shape({
  createdAt: timestampSchema.required(),
  updatedAt: timestampSchema.required(),
  templateId: yup.string().optional(),
  everythingPermissions: yup.boolean().optional(),
  participantUids: yup.array().of(yup.string()).required(),
  groupName: yup.string().required(),
  groupNameAliases: yup
    .lazy(obj =>
      yup.object().shape(
        Object.keys(obj).reduce((acc, key) => {
          acc[key] = yup.string().required();
          return acc;
        }, {} as Record<string, yup.StringSchema>)
      )
    )
    .optional(),
  groupDescription: yup.string().optional(),
  creatorName: yup.string().required(),
  creatorUid: yup.string().required(),
  icon: yup.mixed().oneOf(['bugs', 'team', 'group', 'tactics']).required(),
  thumbnailUrl: yup.string().url().required(),
  lastMessagePreview: yup.string().optional(),
  invitationCode: yup.string().optional(),
  invitationUrl: yup.string().url().optional(),
  lastMessageUid: yup.string().optional(),
  isSharingDisabled: yup.boolean().optional(),
  isTemplate: yup.boolean().optional(),
  unreadCounts: yup.object().required(),
  permissions: yup.mixed().required(), // You would replace this with the actual schema for SupportGroupPermissions
  suggestedTacticIds: yup.object().required(),
});

export type SupportGroupValue = yup.InferType<typeof supportGroupValueSchema>;

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

import { mapValues } from 'lodash';
import * as yup from 'yup';
import { requiredStringArray } from './utils/array';
import { objectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const supportGroupSchema = yup.object().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  slug: yup.string(),
  templateId: yup.string().optional(),
  everythingPermissions: yup.boolean().optional(),
  participantProfileIds: requiredStringArray,
  memberTargetCount: yup.number().optional(),
  groupName: yup.string().required(),
  groupNameAliases: yup
    .lazy(obj => yup.object(mapValues(obj, () => yup.string().required())))
    .optional(),
  groupDescription: yup.string().optional(),
  creatorProfileId: yup.string(),
  thumbnailUrl: yup.string().url().required(),
  lastMessagePreview: yup.string().optional(),
  invitationCode: yup.string().required(),
  invitationUrl: yup.string().url().required(),
  lastMessageProfileId: yup.string().optional(),
  isSharingDisabled: yup.boolean().optional(),
  unreadCounts: objectOf(yup.number().required()),
  permissions: yup.mixed().required(),
});

export type SupportGroupValue = yup.InferType<typeof supportGroupSchema>;

export type PermissionKey = keyof typeof CONVERSATION_PERMISSIONS;
export type SupportGroupPermissions = {
  [profileId: string]: Partial<{
    [key in PermissionKey]: boolean;
  }>;
};

export const CONVERSATION_PERMISSIONS = {
  logs: 'Show my logs',
  tactics: 'Show my tactics',
  editTactics: 'Allow to edit my tactics',
  insights: 'Show my insights',
};

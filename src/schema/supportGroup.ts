import * as yup from 'yup';
import { requiredStringArray } from './utils/array';
import { imageSchema } from './utils/image';
import { optionalTimestampSchema } from './utils/timestamp';

export const tacticPreviewSchema = yup.object({
  title: yup.string().required(),
  image: imageSchema.optional(),
  backgroundColor: yup.string().optional(),
  updatedAt: optionalTimestampSchema,
});
export type TacticPreviewValue = yup.InferType<typeof tacticPreviewSchema>;

export const supportGroupSchema = yup.object().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  slug: yup.string(),
  everythingPermissions: yup.boolean().optional(),
  participantProfileIds: requiredStringArray,
  name: yup.string().required(),
  creatorProfileId: yup.string(),
  lastMessagePreview: yup.string().optional(),
  invitationCode: yup.string().required(),
  invitationUrl: yup.string().url().required(),
  isSharingDisabled: yup.boolean().optional(),
  tacticPreviewsById: yup.array().of(tacticPreviewSchema.required()),
  permissions: yup.object().optional(),
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

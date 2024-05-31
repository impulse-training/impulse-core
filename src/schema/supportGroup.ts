import * as yup from 'yup';
import { optionalStringArray } from './utils/array';
import { imageSchema } from './utils/image';
import { objectOf, optionalObjectOf } from './utils/objectOf';
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
  name: yup.string().required(),
  creatorProfileId: yup.string(),
  invitationCode: yup.string().required(),
  invitationUrl: yup.string().url().required(),
  tacticPreviewsById: objectOf(tacticPreviewSchema.required()),
  last3TacticPreviews: yup.array().of(tacticPreviewSchema.required()),
  // Template support groups are used to populate user's data on signup
  templateFor: yup
    .mixed<'trackTactics' | 'debriefTactics' | 'reflectionTactics'>()
    .oneOf(['trackTactics', 'debriefTactics', 'reflectionTactics']),
  // And recommendations are suggested to users based on their issue (addiction, rumination, etc.)
  recommendedFor: yup
    .mixed<'impulse' | 'time'>()
    .oneOf(['impulse', 'time'])
    .nullable(),
  recommendedForIssueIds: optionalStringArray,
  recommendedForIssueOrdinals: optionalObjectOf(yup.number().required()),
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

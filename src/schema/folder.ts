import { keys } from 'lodash';
import * as yup from 'yup';
import { tacticSchemas } from './tactic';
import { optionalStringArray } from './utils/array';
import { imageSchema } from './utils/image';
import { objectOf, optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

type TacticType = keyof typeof tacticSchemas;
const tacticType = keys(tacticSchemas) as Array<TacticType>;

export const tacticPreviewSchema = yup.object({
  title: yup.string().required(),
  type: yup.mixed<TacticType>().oneOf(tacticType).required(),
  image: imageSchema.optional().nullable(),
  backgroundColor: yup.string().optional(),
  updatedAt: optionalTimestampSchema,
});

export type TacticPreviewValue = yup.InferType<typeof tacticPreviewSchema>;

export const folderSchema = yup.object().shape({
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
  defaultFor: yup
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

export type FolderValue = yup.InferType<typeof folderSchema>;

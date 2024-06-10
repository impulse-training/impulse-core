import { keys } from 'lodash';
import * as yup from 'yup';
import { imageSchema } from '../utils/image';
import { objectOf } from '../utils/objectOf';
import { optionalTimestampSchema } from '../utils/timestamp';
import strategyBase from './base';
import { tacticSchemas } from './tactic';

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

export const folderSchema = strategyBase().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  type: yup.mixed<'folder'>().oneOf(['folder']).required(),
  slug: yup.string(),
  creatorProfileId: yup.string(),
  invitationCode: yup.string().required(),
  invitationUrl: yup.string().url().required(),
  tacticPreviewsById: objectOf(tacticPreviewSchema.required()),
  last3TacticPreviews: yup.array().of(tacticPreviewSchema.required()),
  // Template support groups are used to populate user's data on signup
});

export type FolderValue = yup.InferType<typeof folderSchema>;

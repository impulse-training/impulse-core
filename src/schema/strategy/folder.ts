import * as yup from 'yup';
import { objectOf } from '../utils/objectOf';
import { optionalTimestampSchema } from '../utils/timestamp';
import strategyBase from './base';
import { tacticSchema } from './tactic';

export const folderSchema = strategyBase().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  type: yup.mixed<'folder'>().oneOf(['folder']).required(),
  slug: yup.string(),
  creatorProfileId: yup.string(),
  invitationCode: yup.string().required(),
  invitationUrl: yup.string().url().required(),
  tacticsById: objectOf(tacticSchema),
  last3Tactics: yup.array().of(tacticSchema),
});

export type FolderValue = yup.InferType<typeof folderSchema>;

import * as yup from 'yup';
import { optionalObjectOf } from '../../utils/objectOf';
import { optionalTimestampSchema } from '../../utils/timestamp';
import strategyBase from '../base';
import { tacticSchema } from '../tactic';

export const folderSchema = strategyBase().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  type: yup.mixed<'folder'>().oneOf(['folder']).required(),
  slug: yup.string(),
  creatorProfileId: yup.string(),
  invitationCode: yup.string().required(),
  invitationUrl: yup.string().url().required(),
  tacticsById: optionalObjectOf(tacticSchema),
  next3Tactics: yup.array().of(tacticSchema),
  nextTacticId: yup.string(),
});

export type FolderValue = yup.InferType<typeof folderSchema>;

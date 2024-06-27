import * as yup from 'yup';
import { folderSchema } from '../strategy/folder';
import { logBaseSchema } from './base';

export const folderLogSchema = logBaseSchema('folder').shape({
  id: yup.string().required(),
  folder: folderSchema,
});

export type FolderLogValue = yup.InferType<typeof folderLogSchema>;

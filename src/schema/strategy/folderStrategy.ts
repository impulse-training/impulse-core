import { InferType } from 'yup';
import { folderSchema } from '../folder';
import { strategyValueBaseSchema } from './base';

export const folderStrategySchema = strategyValueBaseSchema(
  'folder',
  folderSchema
);

export type FolderStrategyValue = InferType<typeof folderStrategySchema>;

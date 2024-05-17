import * as yup from 'yup';
import { WithTacticsById } from '../tactic';
import { strategyBaseSchema } from './base';

export const folderStrategySchema = strategyBaseSchema('folder');

export type FolderStrategyValue = WithTacticsById<
  yup.InferType<typeof folderStrategySchema>
>;

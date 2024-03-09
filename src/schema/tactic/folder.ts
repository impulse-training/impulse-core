// These tactics can contain other tactics. We need to exclude this from the NonRecursiveTactic
import * as yup from 'yup';
import { TacticValue } from '.';
import { optionalStringArray, requiredStringArray } from '../utils/array';
import { tacticValueBaseSchema } from './base';

// type, which can then be used to define the FolderTacticValue type.
export type NonRecursiveTactic = Exclude<TacticValue, FolderTacticValue>;

export const folderTacticSchema = tacticValueBaseSchema('folder').shape({
  tacticIds: requiredStringArray,
  suggestedTacticIds: optionalStringArray,
  // We can simply keep incrementing this number to show different tactics
  currentTacticIndex: yup.number().required(),
  // For now, we don't specify the tactic schema here, as it would lead to recursion
  tacticsById: yup.object().required(),
  autogenerate: yup.boolean(),
});

export type FolderTacticValue = Omit<
  yup.InferType<typeof folderTacticSchema>,
  'tacticsById'
> & {
  tacticsById: Record<string, NonRecursiveTactic>;
};

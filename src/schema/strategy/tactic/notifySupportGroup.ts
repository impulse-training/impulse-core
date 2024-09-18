import * as yup from 'yup';
import { tacticValueBaseSchema } from './base';

export const notifySupportGroupTacticSchema =
  tacticValueBaseSchema('notifySupportGroup');

export type NotifySupportGroupTacticValue = yup.InferType<
  typeof notifySupportGroupTacticSchema
>;

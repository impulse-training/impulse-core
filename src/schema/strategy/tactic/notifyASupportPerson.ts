import * as yup from 'yup';
import { tacticValueBaseSchema } from './base';

export const notifyASupportPersonTacticSchema = tacticValueBaseSchema(
  'notifyASupportPerson'
).shape({
  contactIds: yup.array().of(yup.string().required()).required(),
});
export type NotifyASupportPersonTacticValue = yup.InferType<
  typeof notifyASupportPersonTacticSchema
>;

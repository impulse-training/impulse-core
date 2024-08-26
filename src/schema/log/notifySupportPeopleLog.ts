import * as yup from 'yup';
import { logBaseSchema } from './base';

export const notifySupportPeopleLogSchema = logBaseSchema(
  'notifySupportPeople'
).shape({
  contactIds: yup.array().of(yup.string().required()).required(),
  message: yup.string().required(),
});

export type MessageLogValue = yup.InferType<
  typeof notifySupportPeopleLogSchema
>;

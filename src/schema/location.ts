import * as yup from 'yup';
import { optionalTimestampSchema } from './utils/timestamp';

export const locationSchema = yup.object().shape({
  profileId: yup.string().required(),

  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  name: yup.string().required(),
  latitude: yup.number().min(-90).max(90), // latitude ranges from -90 to 90
  longitude: yup.number().min(-180).max(180), // longitude ranges from -180 to 180
  address: yup.string().required(),
});
export type LocationValue = yup.InferType<typeof locationSchema>;

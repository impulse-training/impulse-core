import * as yup from 'yup';
import { logBaseSchema } from './base';

export const tourStepSchema = yup.object({
  elementRefName: yup.string().required(),
  title: yup.string().required(),
  description: yup.string().required(),
  confirmButtonLabel: yup.string().required().default('Ok'),
});

export const showTourLogSchema = logBaseSchema('showTour').shape({
  steps: yup.array().of(tourStepSchema).required(),
  startButtonLabel: yup.string().required(),
  animationFileName: yup.string(),
});

export type ShowTourLogValue = yup.InferType<typeof showTourLogSchema>;

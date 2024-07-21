import * as yup from 'yup';
import { tourStepSchema } from '../option/followUp/showTour/tourStep';
import { logBaseSchema } from './base';

export const showTourLogSchema = logBaseSchema('showTour').shape({
  steps: yup.array().of(tourStepSchema).required(),
});

export type ShowTourLogValue = yup.InferType<typeof showTourLogSchema>;

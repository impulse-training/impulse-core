import * as yup from 'yup';
import { followUpBaseSchema } from '../base';
import { tourStepSchema } from './tourStep';

export const showTourFollowUpSchema = followUpBaseSchema('showTour').shape({
  steps: yup.array().of(tourStepSchema).required(),
});

export type ShowTourFollowUpValue = yup.InferType<
  typeof showTourFollowUpSchema
>;

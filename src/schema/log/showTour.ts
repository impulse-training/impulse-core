import * as yup from 'yup';
import { optionalTimestampSchema } from '../utils/timestamp';
import { logBaseSchema } from './base';

export enum TourIcon {
  DockBehaviorsButton = 'dockBehaviorsButton',
  DockMetricsButton = 'dockMetricsButton',
}

export const tourStepSchema = yup.object({
  elementRefName: yup.string().required(),
  title: yup.string().required(),
  description: yup.string().required(),
  confirmButtonLabel: yup.string().required().default('Ok'),
  nextOnImpulseButtonPress: yup.boolean(),
  borderRadius: yup.number(),
  innerPadding: yup.number(),
});
export type TourStepValue = yup.InferType<typeof tourStepSchema>;

export const showTourLogSchema = logBaseSchema('showTour').shape({
  role: yup.mixed<'assistant'>().oneOf(['assistant']).required(),
  steps: yup.array().of(tourStepSchema).required(),
  firstNavigateToRoute: yup.string(),
  startButtonLabel: yup.string(),
  animationFileName: yup.string(),
  completedAt: optionalTimestampSchema,
  openAutomatically: yup.boolean(),
  icon: yup
    .mixed<TourIcon>()
    .oneOf(Object.values(TourIcon), 'Invalid icon')
    .optional(),
});

export type ShowTourLogValue = yup.InferType<typeof showTourLogSchema>;

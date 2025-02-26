import * as yup from 'yup';
import { logBaseSchema } from './base';

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
});

export type ShowTourLogValue = yup.InferType<typeof showTourLogSchema>;

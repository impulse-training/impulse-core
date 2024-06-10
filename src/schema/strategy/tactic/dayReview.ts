import { keys } from 'lodash';
import * as yup from 'yup';
import { ArrayElement } from '../../../types/types';
import { tacticValueBaseSchema } from './base';

export const dayReviewForDayOptions = {
  today: 'The current day',
  yesterday: 'The previous day',
} as const;

const forDayOptions = keys(dayReviewForDayOptions);

export const dayReviewTacticSchema = tacticValueBaseSchema('day-review').shape({
  forDay: yup
    .mixed<ArrayElement<typeof forDayOptions>>()
    .oneOf(forDayOptions)
    .required(),
});

export type DayReviewTacticValue = yup.InferType<typeof dayReviewTacticSchema>;

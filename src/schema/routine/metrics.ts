// import * as yup from 'yup';
// import { reminderBaseSchema } from './base';

// // In future, we may have reminders that are triggered in response to metrics, e.g. when feeling sad
// export const metricsRoutineSchema = reminderBaseSchema('metrics').shape({
//   metrics: yup.array().of(yup.string()).required().min(1),
// });
// export type EmotionsRoutineValue = yup.InferType<typeof metricsRoutineSchema>;
import * as yup from 'yup';

export const timestampSchema = yup.object({
  seconds: yup.number().required(),
  nanoseconds: yup.number().required(),
  isEqual: yup.mixed<any>().required(),
  toMillis: yup.mixed<any>().required(),
  toJSON: yup.mixed<any>().required(),
  toDate: yup
    .mixed<Function>()
    .test('is-timestamp', 'Must be a valid Timestamp', value => {
      return typeof value === 'function';
    })
    .required(),
});

export const optionalTimestampSchema = timestampSchema
  .notRequired()
  .default(undefined);

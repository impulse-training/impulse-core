import * as yup from 'yup';

export const timestampSchema = yup.object({
  seconds: yup.number().required(),
  nanoseconds: yup.number().required(),
  toDate: yup
    .mixed()
    .test('is-timestamp', 'Must be a valid Timestamp', value => {
      return typeof (value as any) === 'function';
    })
    .required(),
});

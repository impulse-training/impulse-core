import * as yup from 'yup';
import { TimestampLike } from '../../utils/TimestampLike';

export const timestampSchema = yup.object({
  seconds: yup.number().required(),
  nanoseconds: yup.number().required(),
  toDate: yup
    .mixed<Function>()
    .test('is-timestamp', 'Must be a valid Timestamp', value => {
      return typeof value === 'function';
    })
    .required(),
});

export const optionalTimestampSchema = yup.lazy(value =>
  value == null ? yup.mixed().notRequired() : timestampSchema
) as yup.Lazy<yup.Maybe<null> | TimestampLike, yup.AnyObject, any>;

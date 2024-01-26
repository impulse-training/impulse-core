import { mapValues } from 'lodash';
import * as yup from 'yup';

export function objectOf<T extends yup.Schema | yup.Lazy<unknown>>(schema: T) {
  return yup.lazy(obj => yup.object(mapValues(obj, () => schema)));
}

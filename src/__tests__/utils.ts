import * as yup from 'yup';

export function getErrors(obj: Record<string, unknown>, schema: yup.Schema) {
  let errors: Array<Error> = [];

  try {
    schema.validateSync(obj, { abortEarly: false });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      error.inner.forEach(err => errors.push(err));
    } else {
      // Error is unexpected
      throw error;
    }
  }

  return errors;
}

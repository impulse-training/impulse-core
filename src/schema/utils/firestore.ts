import * as yup from 'yup';

export const documentReferenceSchema = yup.mixed<{ id: string }>().test({
  name: 'has-id-property',
  message: '${path} must be an object with an "id" property',
  test: value =>
    value != null &&
    typeof value === 'object' &&
    'id' in value &&
    typeof value.id === 'string',
});

export const collectionReferenceSchema = yup.mixed();

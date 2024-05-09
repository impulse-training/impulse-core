import * as yup from 'yup';

export interface DocumentReferenceLike {
  id: string;
  path: string;
}

export const documentReferenceSchema = yup.mixed<DocumentReferenceLike>().test({
  name: 'has-id-property',
  message: '${path} must be an object with an "id" property',
  test: value =>
    value != null &&
    typeof value === 'object' &&
    'id' in value &&
    typeof value.id === 'string',
});

export const collectionReferenceSchema = yup.mixed();

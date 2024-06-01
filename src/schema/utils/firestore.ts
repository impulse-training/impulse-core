import * as yup from 'yup';
import { DocumentSnapshotLike } from '../../utils/firestore/DocumentSnapshotLike';

export interface DocumentReferenceLike<T> {
  id: string;
  path: string;
  get(): Promise<DocumentSnapshotLike<T>>;
  collection: (collectionPath: string) => any; // any for now
}

export const documentReferenceSchema = yup
  .mixed<DocumentReferenceLike<unknown>>()
  .test({
    name: 'has-id-property',
    message: '${path} must be an object with an "id" property',
    test: value =>
      value != null &&
      typeof value === 'object' &&
      'id' in value &&
      typeof value.id === 'string',
  });

export const collectionReferenceSchema = yup.mixed();

import { keyBy, mapValues } from 'lodash';
import { DocumentSnapshotLike } from './firestore/DocumentSnapshotLike';

export function docsById<T>(
  docs: DocumentSnapshotLike<T>[]
): Record<string, T> {
  return mapValues(keyBy(docs, 'id'), doc => doc.data()!);
}

import { DocumentSnapshotLike } from './firestore/DocumentSnapshotLike';
export declare function docsById<T>(docs: DocumentSnapshotLike<T>[]): Record<string, T>;

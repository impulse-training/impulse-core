import * as yup from 'yup';
import { DocumentSnapshotLike } from '../../utils/firestore/DocumentSnapshotLike';
export interface DocumentReferenceLike<T> {
    id: string;
    path: string;
    get(): Promise<DocumentSnapshotLike<T>>;
}
export declare const documentReferenceSchema: yup.MixedSchema<DocumentReferenceLike<unknown> | undefined, yup.AnyObject, undefined, "">;
export declare const collectionReferenceSchema: yup.MixedSchema<{} | undefined, yup.AnyObject, undefined, "">;

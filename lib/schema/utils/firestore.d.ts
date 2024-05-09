import * as yup from 'yup';
export interface DocumentReferenceLike {
    id: string;
    path: string;
}
export declare const documentReferenceSchema: yup.MixedSchema<DocumentReferenceLike | undefined, yup.AnyObject, undefined, "">;
export declare const collectionReferenceSchema: yup.MixedSchema<{} | undefined, yup.AnyObject, undefined, "">;

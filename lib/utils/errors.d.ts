import { ValidationError } from 'yup';
type ErrorObject = {
    [field: string]: string[];
};
type YupSchemaLike = {
    validateSync: (value: unknown, options?: any) => void;
};
export declare function makeValidationFn<S extends YupSchemaLike>(schema: S): (input: unknown) => ErrorObject;
export declare function yupErrorToErrorObject(err: ValidationError): ErrorObject;
export {};

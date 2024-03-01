import { Schema } from 'yup';
export declare const requiredArrayOf: <T extends Schema<any, any, any, "">>(schema: T) => import("yup").ArraySchema<any[], import("yup").AnyObject, "", "">;
export declare const optionalArrayOf: <T extends Schema<any, any, any, "">>(schema: T) => import("yup").ArraySchema<any[] | undefined, import("yup").AnyObject, "", "">;
export declare const requiredStringArray: import("yup").ArraySchema<any[], import("yup").AnyObject, "", "">;
export declare const optionalStringArray: import("yup").ArraySchema<string[] | undefined, import("yup").AnyObject, "", "">;

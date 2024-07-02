import * as yup from 'yup';
export declare function followUpBaseSchema<K extends string>(type: K): yup.ObjectSchema<{
    type: yup.Defined<K>;
    message: string | undefined;
}, yup.AnyObject, {
    type: undefined;
    message: undefined;
}, "">;

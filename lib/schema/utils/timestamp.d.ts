import * as yup from 'yup';
import { TimestampLike } from '../../utils/TimestampLike';
export declare const timestampSchema: yup.ObjectSchema<{
    seconds: number;
    nanoseconds: number;
    toDate: Function;
}, yup.AnyObject, {
    seconds: undefined;
    nanoseconds: undefined;
    toDate: undefined;
}, "">;
export declare const optionalTimestampSchema: yup.Lazy<TimestampLike | yup.Maybe<null>, yup.AnyObject, any>;

import * as yup from 'yup';
import { QuestionKeyType } from '../question/utils/questionKeyType';
export declare function optionValueBaseSchema<K extends QuestionKeyType>(type: K): yup.ObjectSchema<{
    type: yup.Defined<K>;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    text: string;
    color: string;
    textColor: string;
    label: string | undefined;
}, yup.AnyObject, {
    type: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    text: undefined;
    color: undefined;
    textColor: undefined;
    label: undefined;
}, "">;

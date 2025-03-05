import * as yup from 'yup';
import { TacticValue } from './tactic';
declare const userTacticSchemas: Record<TacticValue['type'], yup.ObjectSchema<any>>;
export declare const userTacticSchema: yup.Lazy<any, yup.AnyObject, any>;
export type UserTacticTypes = {
    [K in TacticValue['type']]: yup.InferType<(typeof userTacticSchemas)[K]>;
};
export type UserTacticValue = UserTacticTypes[TacticValue['type']];
export {};

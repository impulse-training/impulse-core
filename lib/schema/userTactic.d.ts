import * as yup from 'yup';
import { TacticValue } from './tactic';
type UserTacticExtension = {
    allBehaviors: boolean;
    behaviorDocs: Array<any>;
    routineDocs: Array<any>;
    completedAt?: any;
    sourceId?: string;
    customizations?: {
        backgroundColor?: string;
        reminderTime?: any;
        notes?: string;
    };
    usageStats?: {
        timesUsed: number;
        lastUsed?: any;
        effectiveness?: number;
    };
};
export declare const userTacticSchema: yup.Lazy<TacticValue & UserTacticExtension, yup.AnyObject, any>;
export type UserTacticTypes = {
    [K in TacticValue['type']]: TacticValue & UserTacticExtension;
};
export type UserTacticValue = UserTacticTypes[TacticValue['type']];
export {};

import * as yup from 'yup';
import { AudioTacticValue } from './audio';
import { BreatheTacticValue } from './breathe';
import { DayReviewTacticValue } from './dayReview';
import { EmotionsTacticValue } from './emotions';
import { PhoneTacticValue } from './phone';
import { QuestionTacticValue } from './question';
import { StepsTacticValue } from './steps';
import { TaskTacticValue } from './task';
import { UrgeSurfingTacticValue } from './urgeSurfing';
import { VideoTacticValue } from './video';
export * from './audio';
export * from './breathe';
export * from './dayReview';
export * from './emotions';
export * from './phone';
export * from './question';
export * from './steps';
export * from './task';
export * from './urgeSurfing';
export * from './utils';
export * from './video';
export type TacticValue = PhoneTacticValue | AudioTacticValue | UrgeSurfingTacticValue | VideoTacticValue | QuestionTacticValue | TaskTacticValue | BreatheTacticValue | StepsTacticValue | EmotionsTacticValue | DayReviewTacticValue;
export declare const tacticSchemas: Record<TacticValue['type'], yup.ObjectSchema<TacticValue>>;
export declare const tacticSchema: yup.Lazy<ValidatedTactic, yup.AnyObject, any>;
type ValidatedTactic = {
    [K in TacticValue['type']]: yup.InferType<(typeof tacticSchemas)[K]>;
}[TacticValue['type']];
export declare const tacticInfoSchema: yup.ObjectSchema<{
    id: string;
    path: string;
    tactic: any;
}, yup.AnyObject, {
    id: undefined;
    path: undefined;
    tactic: any;
}, "">;
export type TacticInfo = Omit<yup.InferType<typeof tacticInfoSchema>, 'tactic'> & {
    tactic: TacticValue;
};
export declare const tacticsByIdSchema: yup.Lazy<{
    [x: string]: {
        tactic?: any;
        path: string;
        id: string;
    };
}, yup.AnyObject, any>;
export type TacticsById = Record<string, TacticInfo>;
export type WithTacticsById<T> = Omit<T, 'tacticsById'> & {
    tacticsById: TacticsById;
};

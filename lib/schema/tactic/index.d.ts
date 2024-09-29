import * as yup from 'yup';
import { AudioTacticValue } from './audio';
import { BreatheTacticValue } from './breathingExercise';
import { NotifyAContactValue } from './notifyContact';
import { StepsTacticValue } from './steps';
import { TaskTacticValue } from './task';
import { VideoTacticValue } from './video';
import { ZaraTacticValue } from './zara';
export * from './audio';
export * from './breathingExercise';
export * from './notifyContact';
export * from './steps';
export * from './task';
export * from './utils';
export * from './video';
export * from './zara';
export type TacticValue = AudioTacticValue | BreatheTacticValue | NotifyAContactValue | StepsTacticValue | TaskTacticValue | VideoTacticValue | ZaraTacticValue;
export declare const tacticSchemas: Record<TacticValue['type'], yup.ObjectSchema<TacticValue>>;
export declare const tacticSchema: yup.Lazy<ValidatedTactic, yup.AnyObject, any>;
type ValidatedTactic = {
    [K in TacticValue['type']]: yup.InferType<(typeof tacticSchemas)[K]>;
}[TacticValue['type']];
export type TacticsById = Record<string, TacticValue>;
export type WithTacticsById<T> = Omit<T, 'tacticsById'> & {
    tacticsById: TacticsById;
};

import * as yup from 'yup';
import { AudioTacticValue } from './audio';
import { BreatheTacticValue } from './breathingExercise';
import { LinkTacticValue } from './link';
import { NotifyAContactValue } from './notifyContact';
import { NotifySupportGroupValue } from './notifySupportGroup';
import { StepsTacticValue } from './steps';
import { TaskTacticValue } from './task';
import { VideoTacticValue } from './video';
export * from './audio';
export * from './breathingExercise';
export * from './link';
export * from './notifyContact';
export * from './notifySupportGroup';
export * from './steps';
export * from './task';
export * from './utils';
export * from './video';
export type TacticValue = AudioTacticValue | BreatheTacticValue | NotifyAContactValue | StepsTacticValue | TaskTacticValue | VideoTacticValue | NotifySupportGroupValue | LinkTacticValue;
export declare const tacticSchemas: Record<TacticValue['type'], yup.ObjectSchema<TacticValue>>;
export declare const tacticSchema: yup.Lazy<ValidatedTactic, yup.AnyObject, any>;
type ValidatedTactic = {
    [K in TacticValue['type']]: yup.InferType<(typeof tacticSchemas)[K]>;
}[TacticValue['type']];
export type TacticsById = Record<string, TacticValue>;
export type WithTacticsById<T> = Omit<T, 'tacticsById'> & {
    tacticsById: TacticsById;
};

import * as yup from 'yup';
import threadBase from './base';

export const defaultThreadSchema = threadBase('default');
export type DefaultThreadValue = yup.InferType<typeof defaultThreadSchema>;

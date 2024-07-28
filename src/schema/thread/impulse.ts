import * as yup from 'yup';
import threadBase from './base';

export const impulseThreadSchema = threadBase('impulse');
export type ImpulseThreadValue = yup.InferType<typeof impulseThreadSchema>;

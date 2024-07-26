import * as yup from 'yup';
import threadBase from './base';

export const regularThreadSchema = threadBase('regular');
export type RegularThreadValue = yup.InferType<typeof regularThreadSchema>;

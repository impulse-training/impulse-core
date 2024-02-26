import { array, string } from 'yup';

export const requiredStringArray = array().of(string().required()).required();

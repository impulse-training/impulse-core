import { Schema, array, string } from 'yup';

export const requiredArrayOf = <T extends Schema>(schema: T) =>
  array().of(schema).required();

export const optionalArrayOf = <T extends Schema>(schema: T) =>
  array().of(schema).optional();

export const requiredStringArray = requiredArrayOf(string().required());
export const optionalStringArray = array().of(string().required());

// import * as yup from 'yup';
// import { optionSchema } from '../option';
// import { behaviorBaseSchema } from './base';

// // Not used for now
// export const multipleChoiceBehaviorSchema = behaviorBaseSchema(
//   'multipleChoice'
// ).shape({
//   options: yup.array().of(optionSchema).required(),
//   canAddNewOptions: yup.boolean().required().default(false),
// });

// export type MultipleChoiceBehaviorValue = yup.InferType<
//   typeof multipleChoiceBehaviorSchema
// >;

import * as yup from 'yup';

export const locationGameplanSchema = yup.object({
  name: yup.string().required(),
  type: yup.string().oneOf(['arrival', 'departure', 'both']).required(),
});
export type LocationGameplanValue = yup.InferType<
  typeof locationGameplanSchema
>;

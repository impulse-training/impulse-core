import * as yup from 'yup';

// This is a very lightweight collection, where we only track the status of a given call by id. We
// expose this data publicly, so no personal data should be saved in the collection (including phone
// numbers)
export const callStatusSchema = yup.object({
  status: yup.string().required(),
});
export type CallStatusValue = yup.InferType<typeof callStatusSchema>;

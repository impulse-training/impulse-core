import * as yup from 'yup';

export const generatedMixin = {
  text: yup.string(),
  role: yup.mixed().oneOf(['user', 'system', 'assistant']).required(),
  openAiChoiceResponse: yup.mixed().default(undefined),
};

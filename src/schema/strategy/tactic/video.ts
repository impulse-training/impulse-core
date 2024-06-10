import * as yup from 'yup';
import { tacticValueBaseSchema } from './base';

export const videoTacticSchema = tacticValueBaseSchema('video').shape({
  video: yup
    .object({
      url: yup.string().url().nullable(),
      storagePath: yup.string().nullable(),
      title: yup.string().required(),
      description: yup.string().required(),
      thumbnailUrl: yup.string().url().required(),
      duration: yup.number().required(),
    })
    .required(),
});
export type VideoTacticValue = yup.InferType<typeof videoTacticSchema>;

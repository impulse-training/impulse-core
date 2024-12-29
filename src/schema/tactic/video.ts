import * as yup from 'yup';
import { tacticBaseSchema } from './base';

export const videoTacticSchema = tacticBaseSchema('video').shape({
  video: yup
    .object({
      url: yup.string().url().nullable(),
      storagePath: yup.string().nullable(),
      // title: yup.string(),
      // description: yup.string(),
      // thumbnailUrl: yup.string().url(),
      // duration: yup.number(),
    })
    .required(),
});
export type VideoTacticValue = yup.InferType<typeof videoTacticSchema>;

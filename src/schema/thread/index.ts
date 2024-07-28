import * as yup from 'yup';
import { impulseThreadSchema } from './impulse';
import { regularThreadSchema, RegularThreadValue } from './regular';
import { whatsappThreadSchema, WhatsappThreadValue } from './whatsapp';

export * from './impulse';
export * from './regular';
export * from './whatsapp';

export type ThreadValue = WhatsappThreadValue | RegularThreadValue;

export const threadSchemas: Record<
  ThreadValue['type'],
  yup.ObjectSchema<ThreadValue>
> = {
  whatsapp: whatsappThreadSchema,
  regular: regularThreadSchema,
  impulse: impulseThreadSchema,
} as any;

export const threadSchema = yup.lazy(value => {
  if (typeof value.type === 'string' && value.type in threadSchemas) {
    return threadSchemas[value.type as ThreadValue['type']];
  }

  return yup.object({
    type: yup
      .mixed<ThreadValue['type']>()
      .oneOf(Object.keys(threadSchemas) as ThreadValue['type'][])
      .required(),
  });
}) as yup.Lazy<ThreadValue>;

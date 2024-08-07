import * as yup from 'yup';
import { dayReviewThreadSchema, DayReviewThreadValue } from './dayReview';
import { defaultThreadSchema, DefaultThreadValue } from './default';
import { impulseThreadSchema, ImpulseThreadValue } from './impulse';
import { whatsappThreadSchema, WhatsappThreadValue } from './whatsapp';

export * from './default';
export * from './impulse';
export * from './whatsapp';

export type ThreadValue =
  | DefaultThreadValue
  | WhatsappThreadValue
  | ImpulseThreadValue
  | DayReviewThreadValue;

export const threadSchemas: Record<
  ThreadValue['type'],
  yup.ObjectSchema<ThreadValue>
> = {
  whatsapp: whatsappThreadSchema,
  dayReview: dayReviewThreadSchema,
  default: defaultThreadSchema,
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

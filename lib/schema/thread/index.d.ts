import * as yup from 'yup';
import { RegularThreadValue } from './regular';
import { WhatsappThreadValue } from './whatsapp';
export * from './regular';
export * from './whatsapp';
export type ThreadValue = WhatsappThreadValue | RegularThreadValue;
export declare const threadSchemas: Record<ThreadValue['type'], yup.ObjectSchema<ThreadValue>>;
export declare const threadSchema: yup.Lazy<ThreadValue, yup.AnyObject, any>;

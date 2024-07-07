import { keys } from 'lodash';
import * as yup from 'yup';
import { AgentName, agents } from '../../agents';
import { optionalTimestampSchema, timestampSchema } from '../utils/timestamp';
import { gptMessageSchema, gptResponseMixin } from './utils/gpt';

const logViewSchema = yup.object({
  openTime: timestampSchema,
  closeTime: timestampSchema,
});

export function logBaseSchema<K extends string>(type: K) {
  return yup.object({
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    text: yup.string(),
    type: yup.mixed<K>().oneOf([type]).defined(),
    date: timestampSchema,
    activeImpulseId: yup.string().nullable(),
    senderProfileId: yup.string().nullable(),
    views: yup.array().of(logViewSchema),
    agent: yup.mixed<AgentName>().oneOf(keys(agents) as AgentName[]),
    gptPayload: yup.array().of(gptMessageSchema),
    ...gptResponseMixin,
  });
}

import { ChatCompletionMessageParam } from 'openai/resources';
import { LogValue } from '../../schema';
export declare function getGptPayload(log: LogValue): ChatCompletionMessageParam[] | undefined;

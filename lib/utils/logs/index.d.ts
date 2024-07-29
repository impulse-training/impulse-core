import OpenAI from 'openai';
import { LogValue } from '../../schema';
type Message = OpenAI.Chat.Completions.ChatCompletionMessageParam;
export declare function logGptPayload(log: LogValue): Message[] | null;
export {};

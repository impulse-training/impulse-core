import { LogValue } from '../../schema';
export declare function logGptPayload(log: LogValue): {
    role: string;
    content: string | undefined;
}[] | null;

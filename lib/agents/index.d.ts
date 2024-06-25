import { ProfileValue } from '../schema';
export type AgentName = 'onboarding' | 'support';
interface Agent {
    makeSystemMessage: (profile: ProfileValue) => string;
}
export declare const agents: Record<AgentName, Agent>;
export {};

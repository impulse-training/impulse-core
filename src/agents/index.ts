import { ProfileValue } from '../schema';
import { onboardingAgent } from './onboardingAgent';
import { supportAgent } from './supportAgent';

export type AgentName = 'onboarding' | 'support';

interface Agent {
  makeSystemMessage: (profile: ProfileValue) => string;
}

export const agents: Record<AgentName, Agent> = {
  onboarding: onboardingAgent,
  support: supportAgent,
};

import * as Factory from 'factory.ts';
import { ImpulseLogValue } from '../schema/logs';
export declare const impulseFactory: Factory.Sync.Factory<ImpulseLogValue, "type" | "outcome" | keyof import("../schema/logs").BaseLogValue | "pressCount" | "buttonPressSecondsSinceEpoch" | "patternIds" | "debriefNotes" | "debriefReminderSentAt" | "debriefedAt">;

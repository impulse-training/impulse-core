import * as Factory from 'factory.ts';
import { ImpulseLogValue, TacticsLogValue } from '../schema/logs';
export declare const impulseFactory: Factory.Sync.Factory<ImpulseLogValue, "type" | "outcome" | keyof import("../schema/logs").BaseLogValue | "pressCount" | "buttonPressSecondsSinceEpoch" | "patterns" | "patternIds" | "patternUsage" | "debriefNotes" | "debriefReminderSentAt" | "debriefedAt">;
export declare const tacticsLogFactory: Factory.Sync.Factory<TacticsLogValue, "type" | keyof import("../schema/logs").BaseLogValue>;

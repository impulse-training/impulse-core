import * as Factory from 'factory.ts';
import { ImpulseLogValue, MotionLogValue, TacticsLogValue, TimeLogValue } from '../schema/logs';
export declare const impulseFactory: Factory.Sync.Factory<ImpulseLogValue, "type" | "outcome" | keyof import("../schema/logs").BaseLogValue | "pressCount" | "isDisplayable" | "buttonPressSecondsSinceEpoch" | "patterns" | "patternIds" | "patternUsage" | "debriefNotes" | "debriefReminderSentAt" | "debriefedAt">;
export declare const tacticsLogFactory: Factory.Sync.Factory<TacticsLogValue, "type" | keyof import("../schema/logs").BaseLogValue | "isDisplayable">;
export declare const timeLogFactory: Factory.Sync.Factory<TimeLogValue, "type" | keyof import("../schema/logs").BaseLogValue | "isDisplayable" | "reminderId">;
export declare const motionLogFactory: Factory.Sync.Factory<MotionLogValue, "type" | keyof import("../schema/logs").BaseLogValue | "isDisplayable">;

import * as Factory from 'factory.ts';
import { DebriefLogValue, ImpulseLogValue, MotionLogValue, TacticsLogValue, TimeLogValue } from '../schema/logs';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeImpulseFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<ImpulseLogValue, "gameplans" | "type" | "outcome" | "debriefNotes" | keyof import("../schema/logs").BaseLogValue | "pressCount" | "isDisplayable" | "buttonPressSecondsSinceEpoch" | "patterns" | "patternId" | "patternIds" | "patternUsage" | "debriefReminderSentAt" | "debriefedAt">;
export declare const makeTacticsLogFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<TacticsLogValue, "type" | keyof import("../schema/logs").BaseLogValue | "isDisplayable">;
export declare const makeTimeLogFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<TimeLogValue, "type" | keyof import("../schema/logs").BaseLogValue | "isDisplayable" | "gameplanId">;
export declare const makeDebriefLogFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<DebriefLogValue, "type" | "outcome" | keyof import("../schema/logs").BaseLogValue | "isDisplayable" | "patterns" | "patternIds" | "patternUsage" | "gameplanId" | "patternUsageEntries">;
export declare const makeMotionLogFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<MotionLogValue, "type" | keyof import("../schema/logs").BaseLogValue | "isDisplayable">;

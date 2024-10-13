import { ImpulseLogValue, LogValue, MessageLogValue, TacticsLogValue } from '..';
export declare function logIsImpulseLog(log: LogValue): log is ImpulseLogValue;
export declare function logIsMessageLog(log: LogValue): log is MessageLogValue;
export declare function logIsTacticLog(log: LogValue): log is TacticsLogValue;

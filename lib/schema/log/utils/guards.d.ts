import { ImpulseLogValue, LogValue, MessageLogValue, QuestionsLogValue, TacticsLogValue } from '..';
export declare function logIsQuestionsLog(log: LogValue): log is QuestionsLogValue;
export declare function logIsImpulseLog(log: LogValue): log is ImpulseLogValue;
export declare function logIsMessageLog(log: LogValue): log is MessageLogValue;
export declare function logIsTacticLog(log: LogValue): log is TacticsLogValue;

import {
  ImpulseLogValue,
  LogValue,
  MessageLogValue,
  QuestionsLogValue,
  TacticLogValue,
} from '..';

export function logIsQuestionsLog(log: LogValue): log is QuestionsLogValue {
  return log.type === 'questions';
}

export function logIsImpulseLog(log: LogValue): log is ImpulseLogValue {
  return log.type === 'impulse';
}

export function logIsMessageLog(log: LogValue): log is MessageLogValue {
  return log.type === 'message';
}

export function logIsTacticLog(log: LogValue): log is TacticLogValue {
  return log.type === 'questions';
}

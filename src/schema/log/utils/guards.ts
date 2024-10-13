import {
  ImpulseLogValue,
  LogValue,
  MessageLogValue,
  TacticsLogValue,
} from '..';

export function logIsImpulseLog(log: LogValue): log is ImpulseLogValue {
  return log.type === 'impulse';
}

export function logIsMessageLog(log: LogValue): log is MessageLogValue {
  return log.type === 'message';
}

export function logIsTacticLog(log: LogValue): log is TacticsLogValue {
  return log.type === 'tactics';
}

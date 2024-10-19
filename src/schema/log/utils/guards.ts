import { LogValue, TacticsLogValue } from '..';

export function logIsTacticLog(log: LogValue): log is TacticsLogValue {
  return log.type === 'tactics';
}

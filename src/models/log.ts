import {
  ImpulseLogValue,
  LogValue,
  logIsImpulseLog,
  logIsLocationLog,
  logIsTimeLog,
} from '../schema';

export class Log {
  constructor(private id: string, private data: LogValue) {}

  get text() {
    if (logIsImpulseLog(this.data)) return formatPattern(this.selectedPattern);

    if (logIsLocationLog(this.data)) {
      return `${this.data.locationMode === 'enter' ? 'Arrived at' : 'Left'} ${
        this.data.locationName
      }`;
    }

    if (logIsTimeLog(this.data)) {
      return `Scheduled`;
    }

    return '';
  }

  get selectedPattern() {
    const data = this.data as ImpulseLogValue;
    return data.patternsById?.[data.patternId];
  }
}

export function formatPattern(pattern?: { emoji?: string; name: string }) {
  return pattern?.emoji || pattern?.name;
}

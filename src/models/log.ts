import {
  LogValue,
  logIsImpulseLog,
  logIsLocationLog,
  logIsTimeLog,
} from '../schema';

export class Log {
  constructor(private id: string, private data: LogValue) {}

  get text() {
    if (logIsImpulseLog(this.data)) return 'Impulse moment';

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
}

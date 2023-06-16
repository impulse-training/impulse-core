import { isEqual } from 'lodash';
import { LocationValue } from '../schema';
import {
  GameplanValue,
  LocationGameplanValue,
  TimeGameplanValue,
} from '../schema/gameplan';

export const SHORT_DAYS: { [key: number]: string } = {
  1: 'Sun',
  2: 'Mon',
  3: 'Tue',
  4: 'Wed',
  5: 'Thu',
  6: 'Fri',
  7: 'Sat',
};

const LONG_DAYS = [
  '',
  'Sundays',
  'Mondays',
  'Tuesdays',
  'Wednesdays',
  'Thursdays',
  'Fridays',
  'Saturdays',
];

abstract class Gameplan {
  abstract get summary(): string | null;
}

export class TimeGameplan extends Gameplan {
  constructor(private id: string, private data: TimeGameplanValue) {
    super();
  }

  static DAYS = SHORT_DAYS;

  get summary() {
    if (!this.data.weekdays?.length) return null;
    const weekdays = this.data.weekdays.sort();
    const weekdayNames = weekdays.map(dayNumber => LONG_DAYS[dayNumber]);

    function getDaysDescription() {
      if (weekdays.length === 7) return 'Every day';

      if (isEqual(weekdays, [2, 3, 4, 5, 6])) return 'Every weekday';
      return 'On ' + new (Intl as any).ListFormat().format(weekdayNames);
    }

    const daysDescription = getDaysDescription();

    const time = new Date();
    time.setUTCHours(this.data.hour || 0);
    time.setUTCMinutes(this.data.minute || 0);

    const timeComponent = time
      ? time.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          timeZone: 'UTC',
        })
      : null;

    return `${daysDescription} at ${timeComponent}`;
  }
}

export class LocationGameplan extends Gameplan {
  constructor(
    private id: string,
    private data: LocationGameplanValue,
    private location: LocationValue
  ) {
    super();
  }

  get summary() {
    if (!this.location?.name) return '';
    return (
      'When I ' +
        (this.data.mode === 'enter' ? 'arrive at' : 'leave') +
        ' ' +
        this.location.name || '...'
    );
  }
}

export function gameplanToClass(
  id: string,
  reminder: GameplanValue,
  location: LocationValue
) {
  if (reminder.type === 'time') {
    return new TimeGameplan(id, reminder as TimeGameplanValue);
  } else {
    return new LocationGameplan(
      id,
      reminder as LocationGameplanValue,
      location
    );
  }
}

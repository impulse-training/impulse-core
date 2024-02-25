import { difference, isEqual } from 'lodash';
import { LocationValue } from '../schema';
import {
  DayDebriefRoutineValue,
  LocationRoutineValue,
  RoutineValue,
  TimeRoutineValue,
} from '../schema/routine';

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

abstract class Routine {
  abstract get summary(): string | null;
}

export class TimeRoutine extends Routine {
  constructor(private id: string, private data: TimeRoutineValue) {
    super();
  }

  static DAYS = SHORT_DAYS;

  get summary() {
    if (!this.data.weekdays?.length) return null;
    const weekdays = this.data.weekdays.sort();
    const weekdayNames = weekdays.map(dayNumber => LONG_DAYS[dayNumber]);

    function getDaysDescription() {
      if (weekdays.length === 7) return 'Every day';

      if (weekdays.length === 6) {
        const missingDay = difference([1, 2, 3, 4, 5, 6, 7], weekdays)[0];
        console.log({ missingDay, weekdayNames });
        return `Daily except ${LONG_DAYS[missingDay]}`;
      }

      if (isEqual(weekdays, [2, 3, 4, 5, 6])) return 'Every weekday';
      return new (Intl as any).ListFormat().format(weekdayNames);
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

export class DayDebriefRoutine extends Routine {
  constructor(private id: string, private data: DayDebriefRoutineValue) {
    super();
  }

  static DAYS = SHORT_DAYS;

  get summary() {
    return 'Daily debrief';
  }
}

export class LocationRoutine extends Routine {
  constructor(
    private id: string,
    private data: LocationRoutineValue,
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

// TODO: this doesn't support other gameplan types yet
export function gameplanToClass(
  id: string,
  gameplan: RoutineValue,
  location?: LocationValue
) {
  if (gameplan.type === 'time') {
    return new TimeRoutine(id, gameplan as TimeRoutineValue);
  } else if (gameplan.type === 'dayDebrief') {
    return new DayDebriefRoutine(id, gameplan as DayDebriefRoutineValue);
  } else if (gameplan.type === 'location') {
    if (!location) throw new Error('no location');
    return new LocationRoutine(id, gameplan as LocationRoutineValue, location);
  } else {
    throw new Error('Invalid routine');
  }
}

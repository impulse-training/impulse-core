import { difference, isEqual } from 'lodash';
import { LocationValue } from '../schema';
import {
  DayDebriefGameplanValue,
  GameplanValue,
  ImpulseGameplanValue,
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

export class DebriefGameplan extends Gameplan {
  constructor(private id: string, private data: DayDebriefGameplanValue) {
    super();
  }

  static DAYS = SHORT_DAYS;

  get summary() {
    return 'Daily debrief';
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

export class ImpulseGameplan extends Gameplan {
  constructor(private id: string, private data: ImpulseGameplanValue) {
    super();
  }

  get summary() {
    if (this.data.type === 'impulseDebrief') return 'Debriefing';
    return 'When I have an impulse moment';
  }
}

// TODO: this doesn't support other gameplan types yet
export function gameplanToClass(
  id: string,
  gameplan: GameplanValue,
  location: LocationValue
) {
  if (gameplan.type === 'time') {
    return new TimeGameplan(id, gameplan as TimeGameplanValue);
  } else if (['success', 'setback'].includes(gameplan.type)) {
    return new DebriefGameplan(id, gameplan as DayDebriefGameplanValue);
  } else if (gameplan.type === 'location') {
    return new LocationGameplan(
      id,
      gameplan as LocationGameplanValue,
      location
    );
  } else {
    return new ImpulseGameplan(id, gameplan as ImpulseGameplanValue);
  }
}

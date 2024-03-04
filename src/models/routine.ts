import { difference, isEqual } from 'lodash';
import { LONG_DAYS, TimeRoutine } from '../schema';

export function timeRoutineSchemaSummary(routine: TimeRoutine) {
  if (!routine.weekdays?.length) return '';
  const weekdays = routine.weekdays.sort();
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
  time.setUTCHours(routine.hour || 0);
  time.setUTCMinutes(routine.minute || 0);

  const timeComponent = time
    ? time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        timeZone: 'UTC',
      })
    : null;

  return `${daysDescription} at ${timeComponent}`;
}

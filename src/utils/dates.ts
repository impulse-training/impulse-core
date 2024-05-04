import { keyBy } from 'lodash';

export function getDateInTimezone(date: Date, tz: string) {
  // Use Intl.DateTimeFormat to format the date in the given timezone
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const parts = keyBy(formatter.formatToParts(date), 'type');

  return `${parts.year.value}-${parts.month.value}-${parts.day.value}`;
}

export function getTimeInTimezone(date: Date, tz: string) {
  // Use Intl.DateTimeFormat to format the date in the given timezone
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  const parts = keyBy(formatter.formatToParts(date), 'type');

  return {
    hour: parts.hour.value,
    minute: parts.minute.value,
  };
}

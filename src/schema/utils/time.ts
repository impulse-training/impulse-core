import { formatDuration, intervalToDuration } from 'date-fns';
const pluralize = require('pluralize');

export function formatSeconds(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

  if (hours > 0) {
    return `${hours}:${formattedMinutes}:${formattedSeconds}`;
  } else {
    return `${formattedMinutes}:${formattedSeconds}`;
  }
}

export function formatSecondsInWords(seconds: number) {
  if (seconds === 0) return '0 mins';
  const duration = intervalToDuration({ start: 0, end: seconds * 1000 });
  return formatDuration(duration, {
    format: ['hours', 'minutes'], // Specify components to display
    zero: false, // Ignore components with zero value
    locale: {
      // Custom locale for overriding duration labels
      formatDistance: (token, count) => {
        switch (token) {
          case 'xHours':
            return pluralize('hr', count, true);
          case 'xMinutes':
            return pluralize('min', count, true);
          default:
            return pluralize(token, count, true);
        }
      },
    },
  });
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatSecondsInWords = exports.formatSeconds = void 0;
const date_fns_1 = require("date-fns");
const pluralize = require('pluralize');
function formatSeconds(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
    if (hours > 0) {
        return `${hours}:${formattedMinutes}:${formattedSeconds}`;
    }
    else {
        return `${formattedMinutes}:${formattedSeconds}`;
    }
}
exports.formatSeconds = formatSeconds;
function formatSecondsInWords(seconds) {
    if (seconds === 0)
        return '0 mins';
    const duration = (0, date_fns_1.intervalToDuration)({ start: 0, end: seconds * 1000 });
    return (0, date_fns_1.formatDuration)(duration, {
        format: ['hours', 'minutes'],
        zero: false,
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
exports.formatSecondsInWords = formatSecondsInWords;

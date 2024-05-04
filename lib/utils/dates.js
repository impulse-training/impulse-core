"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeInTimezone = exports.getDateInTimezone = void 0;
const lodash_1 = require("lodash");
function getDateInTimezone(date, tz) {
    // Use Intl.DateTimeFormat to format the date in the given timezone
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
    const parts = (0, lodash_1.keyBy)(formatter.formatToParts(date), 'type');
    return `${parts.year.value}-${parts.month.value}-${parts.day.value}`;
}
exports.getDateInTimezone = getDateInTimezone;
function getTimeInTimezone(date, tz) {
    // Use Intl.DateTimeFormat to format the date in the given timezone
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    });
    const parts = (0, lodash_1.keyBy)(formatter.formatToParts(date), 'type');
    return {
        hour: parts.hour.value,
        minute: parts.minute.value,
    };
}
exports.getTimeInTimezone = getTimeInTimezone;

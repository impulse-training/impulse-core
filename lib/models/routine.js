"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeRoutineSchemaSummary = void 0;
const lodash_1 = require("lodash");
const schema_1 = require("../schema");
function timeRoutineSchemaSummary(routine) {
    var _a;
    if (!((_a = routine.weekdays) === null || _a === void 0 ? void 0 : _a.length))
        return '';
    const weekdays = routine.weekdays.sort();
    const weekdayNames = weekdays.map(dayNumber => schema_1.LONG_DAYS[dayNumber]);
    function getDaysDescription() {
        if (weekdays.length === 7)
            return 'Every day';
        if (weekdays.length === 6) {
            const missingDay = (0, lodash_1.difference)([1, 2, 3, 4, 5, 6, 7], weekdays)[0];
            console.log({ missingDay, weekdayNames });
            return `Daily except ${schema_1.LONG_DAYS[missingDay]}`;
        }
        if ((0, lodash_1.isEqual)(weekdays, [2, 3, 4, 5, 6]))
            return 'Every weekday';
        return new Intl.ListFormat().format(weekdayNames);
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
exports.timeRoutineSchemaSummary = timeRoutineSchemaSummary;

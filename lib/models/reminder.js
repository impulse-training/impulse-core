"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reminderToClass = exports.LocationReminder = exports.TimeReminder = void 0;
const lodash_1 = require("lodash");
const days = [
    '',
    'Sundays',
    'Mondays',
    'Tuesdays',
    'Wednesdays',
    'Thursdays',
    'Fridays',
    'Saturdays',
];
class Reminder {
}
class TimeReminder extends Reminder {
    constructor(id, data) {
        super();
        this.id = id;
        this.data = data;
    }
    get summary() {
        var _a;
        if (!((_a = this.data.weekdays) === null || _a === void 0 ? void 0 : _a.length))
            return null;
        const weekdays = this.data.weekdays.sort();
        const weekdayNames = weekdays.map(dayNumber => days[dayNumber]);
        function getDaysDescription() {
            if (weekdays.length === 7)
                return 'Every day';
            if ((0, lodash_1.isEqual)(weekdays, [2, 3, 4, 5, 6]))
                return 'Every weekday';
            return 'On ' + new Intl.ListFormat().format(weekdayNames);
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
exports.TimeReminder = TimeReminder;
class LocationReminder extends Reminder {
    constructor(id, data, location) {
        super();
        this.id = id;
        this.data = data;
        this.location = location;
    }
    get summary() {
        return ('When I ' +
            (this.data.mode === 'enter' ? 'arrive at' : 'leave') +
            ' ' +
            this.location.name);
    }
}
exports.LocationReminder = LocationReminder;
function reminderToClass(id, reminder, location) {
    if (reminder.type === 'time') {
        return new TimeReminder(id, reminder);
    }
    else {
        return new LocationReminder(id, reminder, location);
    }
}
exports.reminderToClass = reminderToClass;

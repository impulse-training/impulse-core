"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationRoutine = exports.DayDebriefRoutine = exports.TimeRoutine = exports.Routine = exports.SHORT_DAYS = void 0;
const lodash_1 = require("lodash");
exports.SHORT_DAYS = {
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
class Routine {
    static from(id, routine, location) {
        if (routine.type === 'time') {
            return new TimeRoutine(id, routine);
        }
        else if (routine.type === 'dayDebrief') {
            return new DayDebriefRoutine(id, routine);
        }
        else if (routine.type === 'location') {
            return new LocationRoutine(id, routine, location);
        }
        else {
            throw new Error('Invalid routine');
        }
    }
}
exports.Routine = Routine;
class TimeRoutine extends Routine {
    constructor(id, data) {
        super();
        this.id = id;
        this.data = data;
    }
    // Title is a cut-down version of the summary
    get title() {
        return 'Scheduled gameplan';
    }
    get summary() {
        var _a;
        if (!((_a = this.data.weekdays) === null || _a === void 0 ? void 0 : _a.length))
            return '';
        const weekdays = this.data.weekdays.sort();
        const weekdayNames = weekdays.map(dayNumber => LONG_DAYS[dayNumber]);
        function getDaysDescription() {
            if (weekdays.length === 7)
                return 'Every day';
            if (weekdays.length === 6) {
                const missingDay = (0, lodash_1.difference)([1, 2, 3, 4, 5, 6, 7], weekdays)[0];
                console.log({ missingDay, weekdayNames });
                return `Daily except ${LONG_DAYS[missingDay]}`;
            }
            if ((0, lodash_1.isEqual)(weekdays, [2, 3, 4, 5, 6]))
                return 'Every weekday';
            return new Intl.ListFormat().format(weekdayNames);
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
exports.TimeRoutine = TimeRoutine;
TimeRoutine.DAYS = exports.SHORT_DAYS;
class DayDebriefRoutine extends Routine {
    constructor(id, data) {
        super();
        this.id = id;
        this.data = data;
    }
    get title() {
        return this.summary;
    }
    get summary() {
        return 'Daily debrief';
    }
}
exports.DayDebriefRoutine = DayDebriefRoutine;
DayDebriefRoutine.DAYS = exports.SHORT_DAYS;
class LocationRoutine extends Routine {
    constructor(id, data, location) {
        super();
        this.id = id;
        this.data = data;
        this.location = location;
    }
    get title() {
        return this.summary;
    }
    get summary() {
        var _a;
        if (!((_a = this.location) === null || _a === void 0 ? void 0 : _a.name))
            return '';
        return ('When I ' +
            (this.data.mode === 'enter' ? 'arrive at' : 'leave') +
            ' ' +
            this.location.name || '...');
    }
}
exports.LocationRoutine = LocationRoutine;

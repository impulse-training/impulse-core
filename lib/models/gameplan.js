"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameplanToClass = exports.ImpulseGameplan = exports.LocationGameplan = exports.DebriefGameplan = exports.TimeGameplan = exports.SHORT_DAYS = void 0;
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
class Gameplan {
}
class TimeGameplan extends Gameplan {
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
exports.TimeGameplan = TimeGameplan;
TimeGameplan.DAYS = exports.SHORT_DAYS;
class DebriefGameplan extends Gameplan {
    constructor(id, data) {
        super();
        this.id = id;
        this.data = data;
    }
    get summary() {
        return 'Daily debrief';
    }
}
exports.DebriefGameplan = DebriefGameplan;
DebriefGameplan.DAYS = exports.SHORT_DAYS;
class LocationGameplan extends Gameplan {
    constructor(id, data, location) {
        super();
        this.id = id;
        this.data = data;
        this.location = location;
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
exports.LocationGameplan = LocationGameplan;
class ImpulseGameplan extends Gameplan {
    constructor(id, data) {
        super();
        this.id = id;
        this.data = data;
    }
    get summary() {
        if (this.data.type === 'success')
            return 'When I have a success';
        if (this.data.type === 'setback')
            return 'When I have a setback';
        return 'When I have an impulse moment';
    }
}
exports.ImpulseGameplan = ImpulseGameplan;
// TODO: this doesn't support other gameplan types yet
function gameplanToClass(id, gameplan, location) {
    if (gameplan.type === 'time') {
        return new TimeGameplan(id, gameplan);
    }
    else if (gameplan.type === 'debrief') {
        return new DebriefGameplan(id, gameplan);
    }
    else if (gameplan.type === 'location') {
        return new LocationGameplan(id, gameplan, location);
    }
    else {
        return new ImpulseGameplan(id, gameplan);
    }
}
exports.gameplanToClass = gameplanToClass;

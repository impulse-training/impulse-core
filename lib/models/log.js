"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initials = exports.tagSymbol = exports.formatPattern = exports.Log = void 0;
class Log {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
    get text() {
        if (this.data.type === 'impulse')
            return formatPattern(this.selectedPattern);
        if (this.data.type === 'location') {
            return `${this.data.locationMode === 'enter' ? 'Arrived at' : 'Left'} ${this.data.locationName}`;
        }
        if (this.data.type === 'time') {
            return `Scheduled`;
        }
        if (this.data.type === 'debrief') {
            return `Daily debrief`;
        }
        return '';
    }
    get selectedPattern() {
        const data = this.data;
        return data.patterns[data.patternId];
    }
}
exports.Log = Log;
function formatPattern(pattern) {
    return pattern.emoji || pattern.name;
}
exports.formatPattern = formatPattern;
// TODO: Remove this export (it's used in the app)
exports.tagSymbol = formatPattern;
function initials(str) {
    if (!str)
        return '';
    const matches = str
        .split(/(?=[A-Z])/)
        .join(' ')
        .match(/\b(\w)/g);
    return ((matches === null || matches === void 0 ? void 0 : matches.join('')) || '').toUpperCase();
}
exports.initials = initials;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initials = exports.tagSymbol = exports.Log = void 0;
class Log {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
    get text() {
        if (this.data.type === 'impulse')
            return this.selectedPatterns.map(tagSymbol).join(', ');
        if (this.data.type === 'location') {
            return `${this.data.locationMode === 'enter' ? 'Arrived at' : 'Left'} ${this.data.locationName}`;
        }
        if (this.data.type === 'time') {
            return `Scheduled`;
        }
        return '';
    }
    get selectedPatterns() {
        const data = this.data;
        if (!data.patternIds)
            return [];
        return data.patternIds.map(id => data.patterns[id]);
    }
}
exports.Log = Log;
function tagSymbol(tag) {
    return tag.emoji || tag.name;
}
exports.tagSymbol = tagSymbol;
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

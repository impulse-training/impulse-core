"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initials = exports.tagSymbol = exports.Log = void 0;
const lodash_1 = require("lodash");
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
        return '';
    }
    get selectedPatterns() {
        const data = this.data;
        if (!data.patternIds)
            return [];
        return data.patternIds.map(id => data.patterns[id]);
    }
    get getTacticSummary() {
        return (0, lodash_1.reduce)(this.data.tacticIds, (memo, id) => {
            const tags = (0, lodash_1.pickBy)(this.data.tagsByTacticId[id], (_tag, id) => this.data.tagIds.includes(id));
            const tagsSummary = (0, lodash_1.values)(tags)
                .map(tag => tag.emoji)
                .join(' ');
            const text = (0, lodash_1.compact)([this.data.tactics[id].title, tagsSummary]).join(' | ');
            memo[id] = { text, applied: true };
            return memo;
        }, {});
    }
}
exports.Log = Log;
function tagSymbol(tag) {
    return tag.emoji || initials(tag.name);
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

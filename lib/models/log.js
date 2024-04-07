"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPattern = exports.Log = void 0;
const schema_1 = require("../schema");
class Log {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
    get text() {
        if ((0, schema_1.logIsImpulseLog)(this.data))
            return formatPattern(this.selectedPattern);
        if ((0, schema_1.logIsLocationLog)(this.data)) {
            return `${this.data.locationMode === 'enter' ? 'Arrived at' : 'Left'} ${this.data.locationName}`;
        }
        if ((0, schema_1.logIsTimeLog)(this.data)) {
            return `Scheduled`;
        }
        return '';
    }
    get selectedPattern() {
        var _a;
        const data = this.data;
        return (_a = data.patternsById) === null || _a === void 0 ? void 0 : _a[data.patternId];
    }
    // Return data from the strategies property, but add strategies that are "unlocked"
    strategy(strategy) {
        return Object.assign(Object.assign({}, strategy), { tactics: strategy.tacticIds.map(id => {
                var _a;
                const tactic = this.data.tacticsById[id];
                const data = (_a = this.data.tacticData) === null || _a === void 0 ? void 0 : _a[id];
                return;
            }) });
    }
}
exports.Log = Log;
function formatPattern(pattern) {
    return (pattern === null || pattern === void 0 ? void 0 : pattern.emoji) || (pattern === null || pattern === void 0 ? void 0 : pattern.name);
}
exports.formatPattern = formatPattern;

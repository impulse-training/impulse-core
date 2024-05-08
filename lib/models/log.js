"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const schema_1 = require("../schema");
class Log {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
    get text() {
        if ((0, schema_1.logIsImpulseLog)(this.data))
            return 'Impulse moment';
        if ((0, schema_1.logIsLocationLog)(this.data)) {
            return `${this.data.locationMode === 'enter' ? 'Arrived at' : 'Left'} ${this.data.locationName}`;
        }
        if ((0, schema_1.logIsTimeLog)(this.data)) {
            return `Scheduled`;
        }
        return '';
    }
}
exports.Log = Log;

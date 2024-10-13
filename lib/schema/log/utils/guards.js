"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIsTacticLog = exports.logIsMessageLog = exports.logIsImpulseLog = void 0;
function logIsImpulseLog(log) {
    return log.type === 'impulse';
}
exports.logIsImpulseLog = logIsImpulseLog;
function logIsMessageLog(log) {
    return log.type === 'message';
}
exports.logIsMessageLog = logIsMessageLog;
function logIsTacticLog(log) {
    return log.type === 'tactics';
}
exports.logIsTacticLog = logIsTacticLog;

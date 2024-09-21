"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIsTacticLog = exports.logIsMessageLog = exports.logIsImpulseLog = exports.logIsQuestionsLog = void 0;
function logIsQuestionsLog(log) {
    return log.type === 'questions';
}
exports.logIsQuestionsLog = logIsQuestionsLog;
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

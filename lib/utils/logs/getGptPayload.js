"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGptPayload = void 0;
const lodash_1 = require("lodash");
const behaviors_1 = require("../behaviors");
function getGptPayload(log) {
    let text = `${log.text || log.audioTranscript} `;
    if (log.type === 'call') {
        if (!log.endedAt || log.transcriptSummary)
            return undefined;
        return {
            role: 'assistant',
            content: `<SYSTEM>CALL BETWEEN ASSISTANT AND USER: ${log.transcriptSummary}</SYSTEM>`,
        };
    }
    if (log.type === 'showTour' && log.completedAt) {
        return {
            role: 'assistant',
            content: `<SYSTEM>USER VIEWED AN APP FEATURE DEMO: ${log.steps
                .map(step => step.title)
                .join(', ')}</SYSTEM>`,
        };
    }
    if (log.type === 'impulse') {
        return {
            role: 'user',
            content: "<SYSTEM>IMPULSE BUTTON PRESSED IN-APP. I'M HAVING AN URGE OR CRAVING</SYSTEM>",
        };
    }
    if (log.type === 'outcome' && log.outcome) {
        return {
            role: 'user',
            content: `<SYSTEM>THIS MOMENT WAS MARKED AS A ${log.outcome}</SYSTEM>`,
        };
    }
    if (log.behaviorData) {
        text += `<SYSTEM>The user reported acting on the impulse, tracking: \n`;
        const behaviorsDescription = (0, lodash_1.compact)((0, lodash_1.flatMap)(log.behaviorData, ({ behavior, data }) => {
            let trackedDescription = [behavior.name, data.formattedValue].join(': ');
            const dailyLimit = behavior.dailyLimit;
            if (typeof dailyLimit === 'number') {
                trackedDescription += ` (goal: ${(0, behaviors_1.formatBehaviorLimit)(behavior)} each day, or less)`;
            }
            return trackedDescription;
        }));
        text += behaviorsDescription.join('\n') + '</SYSTEM>';
    }
    if (log.metricData) {
        text += '<SYSTEM>Emotions: \n';
        const metricsDescription = (0, lodash_1.compact)((0, lodash_1.flatMap)(log.metricData, ({ data }) => data.label));
        text += metricsDescription.join('\n') + '</SYSTEM>';
    }
    if (log.tacticsData) {
        text += '<SYSTEM>Strategies used: \n';
        const tacticsDescription = (0, lodash_1.compact)((0, lodash_1.flatMap)(log.tacticsData, ({ tactic }) => tactic.prompt));
        text += tacticsDescription.join('\n') + '</SYSTEM>';
    }
    if (log.type === 'toolCall') {
        return {
            role: log.role,
            content: text,
            tool_call_id: log.toolCallId,
        };
    }
    if (hasRole(log)) {
        return {
            role: log.role,
            content: text,
        };
    }
    return;
}
exports.getGptPayload = getGptPayload;
function hasRole(log) {
    return ['user', 'gpt'].includes(log.type);
}

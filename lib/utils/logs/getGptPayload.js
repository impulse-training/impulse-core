"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGptPayload = void 0;
const date_fns_1 = require("date-fns");
const lodash_1 = require("lodash");
const schema_1 = require("../../schema");
const behaviors_1 = require("../behaviors");
function getGptPayload(log) {
    let text = `${log.text || log.audioTranscript} `;
    if (log.type === 'call') {
        if (!log.endedAt || log.transcriptSummary) {
            return {
                role: 'user',
                content: 'We had a live voice call. The transcript is pending.',
            };
        }
        const durationInSeconds = (0, date_fns_1.differenceInSeconds)(log.endedAt.toDate(), log.date.toDate());
        const formattedDuration = (0, schema_1.formatSecondsInWords)(durationInSeconds);
        return {
            role: 'user',
            content: `We had a call that lasted ${formattedDuration}. ${log.transcriptSummary}`,
        };
    }
    if (log.type === 'impulse') {
        return {
            role: 'user',
            content: "I'm having an impulse moment (a craving or urge)",
        };
    }
    if (log.type === 'outcome' && log.outcome) {
        return {
            role: 'user',
            content: 'This impulse moment was marked as a ' + log.outcome,
        };
    }
    if (log.behaviorData) {
        text += `The user reported acting on the impulse, tracking: \n`;
        const behaviorsDescription = (0, lodash_1.compact)((0, lodash_1.flatMap)(log.behaviorData, ({ behavior, data }) => {
            let trackedDescription = [behavior.name, data.formattedValue].join(': ');
            const dailyLimit = behavior.dailyLimit;
            if (typeof dailyLimit === 'number') {
                trackedDescription += ` (goal: ${(0, behaviors_1.formatBehaviorLimit)(behavior)} each day, or less)`;
            }
            return trackedDescription;
        }));
        text += behaviorsDescription.join('\n');
    }
    if (log.metricData) {
        text += 'Emotions: \n';
        const metricsDescription = (0, lodash_1.compact)((0, lodash_1.flatMap)(log.metricData, ({ data }) => data.label));
        text += metricsDescription.join('\n');
    }
    if (log.tacticsData) {
        text += 'Strategies used: \n';
        const tacticsDescription = (0, lodash_1.compact)((0, lodash_1.flatMap)(log.tacticsData, ({ tactic }) => tactic.prompt));
        text += tacticsDescription.join('\n');
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

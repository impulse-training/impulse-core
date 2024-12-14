"use strict";
// We can probably structure this better, for example, by setting up converters on our documents to
// wrap them in a class that has a toGptInput method. We actually used to use converters, but it was
Object.defineProperty(exports, "__esModule", { value: true });
exports.logTextForGpt = void 0;
const lodash_1 = require("lodash");
const SEPARATOR = ',';
// Given a log, generate a text description that can be used as input to an LLM
function logTextForGpt(log) {
    let text = log.text + ' ';
    // Handle tactics that have been completed
    if (log.behaviorData) {
        const behaviorsDescription = (0, lodash_1.compact)((0, lodash_1.flatMap)(log.behaviorData, ({ behavior, behaviorData }) => {
            const prompt = behavior.prompt;
            const goalText = (behaviorData === null || behaviorData === void 0 ? void 0 : behaviorData.setbackThreshold)
                ? ` (goal is ${behaviorData.setbackThreshold} or less)`
                : '';
            if (!behaviorData)
                return null;
            return [prompt + goalText, behaviorData.stringValue].join(': ');
        }));
        text += behaviorsDescription.join(SEPARATOR);
    }
    return text;
}
exports.logTextForGpt = logTextForGpt;

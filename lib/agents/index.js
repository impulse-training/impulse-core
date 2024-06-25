"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agents = void 0;
const onboardingAgent_1 = require("./onboardingAgent");
const supportAgent_1 = require("./supportAgent");
exports.agents = {
    onboarding: onboardingAgent_1.onboardingAgent,
    support: supportAgent_1.supportAgent,
};

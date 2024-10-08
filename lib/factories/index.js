"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFactories = void 0;
const application_1 = require("./application");
const day_1 = require("./day");
const daysSummary_1 = require("./daysSummary");
const issue_1 = require("./issue");
const location_1 = require("./location");
const log_1 = require("./log");
const profile_1 = require("./profile");
const profileStrategy_1 = require("./profileStrategy");
const question_1 = require("./question");
const reminder_1 = require("./reminder");
const roadmap_1 = require("./roadmap");
const strategy_1 = require("./strategy");
const suggestion_1 = require("./suggestion");
const tactic_1 = require("./tactic");
// Our admin and client apps use the same factories, but the firebase-admin versus firebase client
// libraries respectively. These use different Timestamp classes, so we pass in the class as an
// injected dependency
function makeFactories(TimestampKlass) {
    return Object.assign(Object.assign({ applicationFactory: (0, application_1.makeApplicationFactory)(TimestampKlass), dayFactory: (0, day_1.makeDayFactory)(TimestampKlass), issueFactory: (0, issue_1.makeIssueFactory)(TimestampKlass), locationFactory: (0, location_1.makeLocationFactory)(TimestampKlass), daysSummaryFactory: (0, daysSummary_1.makeDaysSummaryFactory)(TimestampKlass), profileFactory: (0, profile_1.makeProfileFactory)(TimestampKlass), timeReminderFactory: (0, reminder_1.makeTimeReminderFactory)(TimestampKlass), tacticFactory: (0, tactic_1.makeTacticFactory)(TimestampKlass), roadmapFactory: (0, roadmap_1.makeRoadmapFactory)(TimestampKlass), suggestionFactory: (0, suggestion_1.makeSuggestionFactory)(TimestampKlass), strategyFactory: (0, strategy_1.makeStrategyFactory)(TimestampKlass), profileStrategyFactory: (0, profileStrategy_1.makeProfileStrategyFactory)(TimestampKlass) }, (0, question_1.makeQuestionFactories)(TimestampKlass)), (0, log_1.makeLogFactories)(TimestampKlass));
}
exports.makeFactories = makeFactories;

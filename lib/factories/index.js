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
const question_1 = require("./question");
const roadmap_1 = require("./roadmap");
const routine_1 = require("./routine");
const suggestion_1 = require("./suggestion");
const tactic_1 = require("./tactic");
const thread_1 = require("./thread");
// Our admin and client apps use the same factories, but the firebase-admin versus firebase client
// libraries respectively. These use different Timestamp classes, so we pass in the class as an
// injected dependency
function makeFactories(TimestampKlass) {
    return Object.assign(Object.assign(Object.assign({ applicationFactory: (0, application_1.makeApplicationFactory)(TimestampKlass), dayFactory: (0, day_1.makeDayFactory)(TimestampKlass), issueFactory: (0, issue_1.makeIssueFactory)(TimestampKlass), locationFactory: (0, location_1.makeLocationFactory)(TimestampKlass), daysSummaryFactory: (0, daysSummary_1.makeDaysSummaryFactory)(TimestampKlass), profileFactory: (0, profile_1.makeProfileFactory)(TimestampKlass), timeRoutineFactory: (0, routine_1.makeTimeRoutineFactory)(TimestampKlass), tacticFactory: (0, tactic_1.makeTacticFactory)(TimestampKlass), roadmapFactory: (0, roadmap_1.makeRoadmapFactory)(TimestampKlass), suggestionFactory: (0, suggestion_1.makeSuggestionFactory)(TimestampKlass) }, (0, question_1.makeQuestionFactories)(TimestampKlass)), (0, log_1.makeLogFactories)(TimestampKlass)), (0, thread_1.makeThreadFactories)(TimestampKlass));
}
exports.makeFactories = makeFactories;

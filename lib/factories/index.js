"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFactories = void 0;
const behavior_1 = require("./behavior");
const day_1 = require("./day");
const daysSummary_1 = require("./daysSummary");
const issue_1 = require("./issue");
const location_1 = require("./location");
const log_1 = require("./log");
const profile_1 = require("./profile");
const routine_1 = require("./routine");
const suggestion_1 = require("./suggestion");
const tactic_1 = require("./tactic");
// Our admin and client apps use the same factories, but the firebase-admin versus firebase client
// libraries respectively. These use different Timestamp classes, so we pass in the class as an
// injected dependency
function makeFactories(TimestampKlass) {
    return Object.assign({ dayFactory: (0, day_1.makeDayFactory)(TimestampKlass), issueFactory: (0, issue_1.makeIssueFactory)(TimestampKlass), locationFactory: (0, location_1.makeLocationFactory)(TimestampKlass), daysSummaryFactory: (0, daysSummary_1.makeDaysSummaryFactory)(TimestampKlass), profileFactory: (0, profile_1.makeProfileFactory)(TimestampKlass), routineFactory: (0, routine_1.makeRoutineFactory)(TimestampKlass), tacticFactory: (0, tactic_1.makeTacticFactory)(TimestampKlass), suggestionFactory: (0, suggestion_1.makeSuggestionFactory)(TimestampKlass), behaviorFactory: (0, behavior_1.makeBehaviorFactory)(TimestampKlass) }, (0, log_1.makeLogFactories)(TimestampKlass));
}
exports.makeFactories = makeFactories;

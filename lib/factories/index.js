"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFactories = void 0;
const application_1 = require("./application");
const comment_1 = require("./comment");
const day_1 = require("./day");
const folder_1 = require("./folder");
const issue_1 = require("./issue");
const location_1 = require("./location");
const log_1 = require("./log");
const profile_1 = require("./profile");
const profileLogsSummary_1 = require("./profileLogsSummary");
const question_1 = require("./question");
const routine_1 = require("./routine");
const tactic_1 = require("./tactic");
// Our admin and client apps use the same factories, but the firebase-admin versus firebase client
// libraries respectively. These use different Timestamp classes, so we pass in the class as an
// injected dependency
function makeFactories(TimestampKlass) {
    return {
        applicationFactory: (0, application_1.makeApplicationFactory)(TimestampKlass),
        commentFactory: (0, comment_1.makeCommentFactory)(TimestampKlass),
        dayFactory: (0, day_1.makeDayFactory)(TimestampKlass),
        folderFactory: (0, folder_1.makeFolderFactory)(TimestampKlass),
        impulseFactory: (0, log_1.makeImpulseLogFactory)(TimestampKlass),
        issueFactory: (0, issue_1.makeIssueFactory)(TimestampKlass),
        locationFactory: (0, location_1.makeLocationFactory)(TimestampKlass),
        profileLogsSummaryFactory: (0, profileLogsSummary_1.makeProfileLogsSummaryFactory)(TimestampKlass),
        profileFactory: (0, profile_1.makeProfileFactory)(TimestampKlass),
        questionTimeFactory: (0, question_1.makeQuestionTimeTacticFactory)(TimestampKlass),
        timeRoutineFactory: (0, routine_1.makeTimeRoutineFactory)(TimestampKlass),
        tacticFactory: (0, tactic_1.makeTacticFactory)(TimestampKlass),
    };
}
exports.makeFactories = makeFactories;

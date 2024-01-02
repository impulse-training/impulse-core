"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticFactory = exports.supportGroupFactory = exports.profileFactory = exports.setbackGameplanFactory = exports.successGameplanFactory = exports.logSummaryFactory = exports.debriefLogFactory = exports.recommendationFactory = exports.motionLogFactory = exports.timeLogFactory = exports.impulseFactory = exports.commentFactory = exports.applicationFactory = exports.makeFactories = void 0;
const FakeTimestamp_1 = require("../utils/FakeTimestamp");
const application_1 = require("./application");
const comment_1 = require("./comment");
const gameplan_1 = require("./gameplan");
const issue_1 = require("./issue");
const location_1 = require("./location");
const logSummary_1 = require("./logSummary");
const logs_1 = require("./logs");
const pattern_1 = require("./pattern");
const profile_1 = require("./profile");
const recommendation_1 = require("./recommendation");
const supportGroup_1 = require("./supportGroup");
const tactic_1 = require("./tactic");
// Our admin and client apps use the same factories, but the firebase-admin versus firebase client
// libraries respectively. These use different Timestamp classes, so we pass in the class as an
// injected dependency
function makeFactories(TimestampKlass) {
    return {
        applicationFactory: (0, application_1.makeApplicationFactory)(TimestampKlass),
        commentFactory: (0, comment_1.makeCommentFactory)(TimestampKlass),
        impulseFactory: (0, logs_1.makeImpulseFactory)(TimestampKlass),
        timeLogFactory: (0, logs_1.makeTimeLogFactory)(TimestampKlass),
        motionLogFactory: (0, logs_1.makeMotionLogFactory)(TimestampKlass),
        locationLogFactory: (0, logs_1.makeLocationLogFactory)(TimestampKlass),
        debriefLogFactory: (0, logs_1.makeDebriefLogFactory)(TimestampKlass),
        locationFactory: (0, location_1.makeLocationFactory)(TimestampKlass),
        logSummaryFactory: (0, logSummary_1.makeLogSummaryFactory)(TimestampKlass),
        profileFactory: (0, profile_1.makeProfileFactory)(TimestampKlass),
        issueFactory: (0, issue_1.makeIssueFactory)(TimestampKlass),
        adminProfileFactory: (0, profile_1.makeAdminProfileFactory)(TimestampKlass),
        supportGroupFactory: (0, supportGroup_1.makeSupportGroupFactory)(TimestampKlass),
        impulseGameplanFactory: (0, gameplan_1.makeImpulseGameplanFactory)(TimestampKlass),
        successGameplanFactory: (0, gameplan_1.makeSuccessGameplanFactory)(TimestampKlass),
        setbackGameplanFactory: (0, gameplan_1.makeSetbackGameplanFactory)(TimestampKlass),
        timeGameplanFactory: (0, gameplan_1.makeTimeGameplanFactory)(TimestampKlass),
        patternFactory: (0, pattern_1.makePatternFactory)(TimestampKlass),
        locationGameplanFactory: (0, gameplan_1.makeLocationGameplanFactory)(TimestampKlass),
        recommendationFactory: (0, recommendation_1.makeRecommendationFactory)(TimestampKlass),
        tacticFactory: (0, tactic_1.makeTacticFactory)(TimestampKlass),
    };
}
exports.makeFactories = makeFactories;
// We also directly export all factories, using our "FakeTimestamp" class, for unit testing in this
// library
_a = makeFactories(FakeTimestamp_1.FakeTimestamp), exports.applicationFactory = _a.applicationFactory, exports.commentFactory = _a.commentFactory, exports.impulseFactory = _a.impulseFactory, exports.timeLogFactory = _a.timeLogFactory, exports.motionLogFactory = _a.motionLogFactory, exports.recommendationFactory = _a.recommendationFactory, exports.debriefLogFactory = _a.debriefLogFactory, exports.logSummaryFactory = _a.logSummaryFactory, exports.successGameplanFactory = _a.successGameplanFactory, exports.setbackGameplanFactory = _a.setbackGameplanFactory, exports.profileFactory = _a.profileFactory, exports.supportGroupFactory = _a.supportGroupFactory, exports.tacticFactory = _a.tacticFactory;

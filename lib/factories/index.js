"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFactories = void 0;
const application_1 = require("./application");
const comment_1 = require("./comment");
const issue_1 = require("./issue");
const location_1 = require("./location");
const log_1 = require("./log");
const message_1 = require("./message");
const pattern_1 = require("./pattern");
const profile_1 = require("./profile");
const recommendation_1 = require("./recommendation");
const recommendationRuleFactory_1 = require("./recommendationRuleFactory");
const routine_1 = require("./routine");
const supportGroup_1 = require("./supportGroup");
const tactic_1 = require("./tactic");
// Our admin and client apps use the same factories, but the firebase-admin versus firebase client
// libraries respectively. These use different Timestamp classes, so we pass in the class as an
// injected dependency
function makeFactories(TimestampKlass) {
    return {
        applicationFactory: (0, application_1.makeApplicationFactory)(TimestampKlass),
        commentFactory: (0, comment_1.makeCommentFactory)(TimestampKlass),
        impulseFactory: (0, log_1.makeImpulseFactory)(TimestampKlass),
        timeLogFactory: (0, log_1.makeTimeLogFactory)(TimestampKlass),
        motionLogFactory: (0, log_1.makeMotionLogFactory)(TimestampKlass),
        locationLogFactory: (0, log_1.makeLocationLogFactory)(TimestampKlass),
        debriefLogFactory: (0, log_1.makeDebriefLogFactory)(TimestampKlass),
        locationFactory: (0, location_1.makeLocationFactory)(TimestampKlass),
        profileFactory: (0, profile_1.makeProfileFactory)(TimestampKlass),
        issueFactory: (0, issue_1.makeIssueFactory)(TimestampKlass),
        adminProfileFactory: (0, profile_1.makeAdminProfileFactory)(TimestampKlass),
        supportGroupFactory: (0, supportGroup_1.makeSupportGroupFactory)(TimestampKlass),
        debriefRoutineFactory: (0, routine_1.makeDebriefRoutineFactory)(TimestampKlass),
        messageFactory: (0, message_1.makeMessageFactory)(TimestampKlass),
        timeRoutineFactory: (0, routine_1.makeTimeRoutineFactory)(TimestampKlass),
        patternFactory: (0, pattern_1.makePatternFactory)(TimestampKlass),
        locationRoutineFactory: (0, routine_1.makeLocationRoutineFactory)(TimestampKlass),
        recommendationFactory: (0, recommendation_1.makeRecommendationFactory)(TimestampKlass),
        recommendationRuleFactory: (0, recommendationRuleFactory_1.makeRecommendationRuleFactory)(TimestampKlass),
        newRoutineRecommendationRuleFactory: (0, recommendationRuleFactory_1.makeNewRoutineRecommendationRuleFactory)(TimestampKlass),
        tacticFactory: (0, tactic_1.makeTacticFactory)(TimestampKlass),
    };
}
exports.makeFactories = makeFactories;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFactories = void 0;
const application_1 = require("./application");
const comment_1 = require("./comment");
const gameplan_1 = require("./gameplan");
const issue_1 = require("./issue");
const location_1 = require("./location");
const log_1 = require("./log");
const message_1 = require("./message");
const pattern_1 = require("./pattern");
const profile_1 = require("./profile");
const recommendation_1 = require("./recommendation");
const recommendationRule_1 = require("./recommendationRule");
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
        gameplanFactory: (0, gameplan_1.makeGameplanFactory)(TimestampKlass),
        issueFactory: (0, issue_1.makeIssueFactory)(TimestampKlass),
        adminProfileFactory: (0, profile_1.makeAdminProfileFactory)(TimestampKlass),
        supportGroupFactory: (0, supportGroup_1.makeSupportGroupFactory)(TimestampKlass),
        messageFactory: (0, message_1.makeMessageFactory)(TimestampKlass),
        patternFactory: (0, pattern_1.makePatternFactory)(TimestampKlass),
        impulseRecommendationFactory: (0, recommendation_1.makeImpulseRecommendationFactory)(TimestampKlass),
        impulseRecommendationRuleFactory: (0, recommendationRule_1.makeImpulseRecommendationRuleFactory)(TimestampKlass),
        tacticFactory: (0, tactic_1.makeTacticFactory)(TimestampKlass),
        folderTacticFactory: (0, tactic_1.makeFolderTacticFactory)(TimestampKlass),
    };
}
exports.makeFactories = makeFactories;

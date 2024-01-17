import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare function makeFactories(TimestampKlass: typeof FakeTimestamp): {
    applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>;
    commentFactory: import("factory.ts").Factory<import("..").CommentValue, keyof import("..").CommentValue>;
    impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "type" | "gameplans" | "outcome" | "patternId" | "debriefNotes" | keyof import("..").BaseLogValue | "setAsActiveImpulse" | "pressCount" | "isDisplayable" | "buttonPressSecondsSinceEpoch" | "patterns" | "patternIds" | "patternUsage" | "debriefReminderSentAt" | "debriefedAt">;
    timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "type" | keyof import("..").BaseLogValue | "isDisplayable" | "gameplanId">;
    motionLogFactory: import("factory.ts").Factory<import("..").MotionLogValue, "type" | keyof import("..").BaseLogValue | "isDisplayable">;
    locationLogFactory: import("factory.ts").Factory<import("..").LocationLogValue, "type" | "locationMode" | "locationId" | keyof import("..").BaseLogValue | "isDisplayable" | "locationName">;
    debriefLogFactory: import("factory.ts").Factory<import("..").DebriefLogValue, "type" | "outcome" | keyof import("..").BaseLogValue | "isDisplayable" | "patterns" | "patternIds" | "patternUsage" | "gameplanId" | "patternUsageEntries">;
    locationFactory: import("factory.ts").Factory<import("..").LocationValue, keyof import("..").LocationValue>;
    logSummaryFactory: import("factory.ts").Factory<import("..").LogSummaryValue, keyof import("..").LogSummaryValue>;
    profileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>;
    issueFactory: import("factory.ts").Factory<import("..").IssueValue, keyof import("..").IssueValue>;
    adminProfileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>;
    supportGroupFactory: import("factory.ts").Factory<import("..").SupportGroupValue, keyof import("..").SupportGroupValue>;
    impulseGameplanFactory: import("factory.ts").Factory<import("..").ImpulseGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "title" | "isTemplate" | keyof import("..").Gameplan | "navigationTitle" | "tacticsUpdatedAt" | "timezone" | "patternName" | "issueId" | "parentIssueIds" | "patternId">;
    successGameplanFactory: import("factory.ts").Factory<import("..").ImpulseGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "title" | "isTemplate" | keyof import("..").Gameplan | "navigationTitle" | "tacticsUpdatedAt" | "timezone" | "patternName" | "issueId" | "parentIssueIds" | "patternId">;
    setbackGameplanFactory: import("factory.ts").Factory<import("..").ImpulseGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "title" | "isTemplate" | keyof import("..").Gameplan | "navigationTitle" | "tacticsUpdatedAt" | "timezone" | "patternName" | "issueId" | "parentIssueIds" | "patternId">;
    timeGameplanFactory: import("factory.ts").Factory<import("..").TimeGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "title" | "isTemplate" | "hour" | "minute" | keyof import("..").Gameplan | "navigationTitle" | "tacticsUpdatedAt" | "timezone" | "patternName" | "issueId" | "parentIssueIds" | "weekdays" | "scheduledNotificationIds">;
    patternFactory: import("factory.ts").Factory<import("..").PatternValue, keyof import("..").PatternValue>;
    locationGameplanFactory: import("factory.ts").Factory<import("..").LocationGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "title" | "isTemplate" | keyof import("..").Gameplan | "navigationTitle" | "tacticsUpdatedAt" | "timezone" | "patternName" | "issueId" | "parentIssueIds" | "locationId" | "mode">;
    recommendationFactory: import("factory.ts").Factory<import("..").RecommendationValue, "uid" | "ordinal" | "createdAt" | "updatedAt" | "title" | "tacticIds" | "tacticsById" | "appliedAt" | "dismissedAt" | "explanation" | "gameplanExplanation" | "recommenderUid" | "recommenderName" | "ruleId" | "gameplanIds" | "defaultSelected">;
    recommendationRuleFactory: import("factory.ts").Factory<import("..").RecommendationRuleValue, keyof import("..").RecommendationRuleValue>;
    newGameplanRecommendationRuleFactory: import("factory.ts").Factory<import("..").RecommendationRuleValue, keyof import("..").RecommendationRuleValue>;
    tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "type" | "uid" | "ordinal" | "isSuggested" | "createdAt" | "updatedAt" | "title" | "description" | "image" | "backgroundColor" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "isAvailableForRecommendation">;
};
export declare const applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>, commentFactory: import("factory.ts").Factory<import("..").CommentValue, keyof import("..").CommentValue>, impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "type" | "gameplans" | "outcome" | "patternId" | "debriefNotes" | keyof import("..").BaseLogValue | "setAsActiveImpulse" | "pressCount" | "isDisplayable" | "buttonPressSecondsSinceEpoch" | "patterns" | "patternIds" | "patternUsage" | "debriefReminderSentAt" | "debriefedAt">, timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "type" | keyof import("..").BaseLogValue | "isDisplayable" | "gameplanId">, motionLogFactory: import("factory.ts").Factory<import("..").MotionLogValue, "type" | keyof import("..").BaseLogValue | "isDisplayable">, recommendationFactory: import("factory.ts").Factory<import("..").RecommendationValue, "uid" | "ordinal" | "createdAt" | "updatedAt" | "title" | "tacticIds" | "tacticsById" | "appliedAt" | "dismissedAt" | "explanation" | "gameplanExplanation" | "recommenderUid" | "recommenderName" | "ruleId" | "gameplanIds" | "defaultSelected">, debriefLogFactory: import("factory.ts").Factory<import("..").DebriefLogValue, "type" | "outcome" | keyof import("..").BaseLogValue | "isDisplayable" | "patterns" | "patternIds" | "patternUsage" | "gameplanId" | "patternUsageEntries">, logSummaryFactory: import("factory.ts").Factory<import("..").LogSummaryValue, keyof import("..").LogSummaryValue>, successGameplanFactory: import("factory.ts").Factory<import("..").ImpulseGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "title" | "isTemplate" | keyof import("..").Gameplan | "navigationTitle" | "tacticsUpdatedAt" | "timezone" | "patternName" | "issueId" | "parentIssueIds" | "patternId">, setbackGameplanFactory: import("factory.ts").Factory<import("..").ImpulseGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "title" | "isTemplate" | keyof import("..").Gameplan | "navigationTitle" | "tacticsUpdatedAt" | "timezone" | "patternName" | "issueId" | "parentIssueIds" | "patternId">, profileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>, supportGroupFactory: import("factory.ts").Factory<import("..").SupportGroupValue, keyof import("..").SupportGroupValue>, tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "type" | "uid" | "ordinal" | "isSuggested" | "createdAt" | "updatedAt" | "title" | "description" | "image" | "backgroundColor" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "isAvailableForRecommendation">, recommendationRuleFactory: import("factory.ts").Factory<import("..").RecommendationRuleValue, keyof import("..").RecommendationRuleValue>;

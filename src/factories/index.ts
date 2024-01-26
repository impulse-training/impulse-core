import { TimestampLike } from '../utils/TimestampLike';
import { makeApplicationFactory } from './application';
import { makeCommentFactory } from './comment';
import {
  makeImpulseGameplanFactory,
  makeLocationGameplanFactory,
  makeSetbackGameplanFactory,
  makeSuccessGameplanFactory,
  makeTimeGameplanFactory,
} from './gameplan';
import { makeIssueFactory } from './issue';
import { makeLocationFactory } from './location';
import {
  makeDebriefLogFactory,
  makeImpulseFactory,
  makeLocationLogFactory,
  makeMotionLogFactory,
  makeTimeLogFactory,
} from './log';
import { makeLogSummaryFactory } from './logSummary';
import { makeMessageFactory } from './message';
import { makePatternFactory } from './pattern';
import { makeAdminProfileFactory, makeProfileFactory } from './profile';
import { makeRecommendationFactory } from './recommendation';
import {
  makeNewGameplanRecommendationRuleFactory,
  makeRecommendationRuleFactory,
} from './recommendationRuleFactory';
import { makeSupportGroupFactory } from './supportGroup';
import { makeTacticFactory } from './tactic';

// Our admin and client apps use the same factories, but the firebase-admin versus firebase client
// libraries respectively. These use different Timestamp classes, so we pass in the class as an
// injected dependency
export function makeFactories(TimestampKlass: typeof TimestampLike) {
  return {
    applicationFactory: makeApplicationFactory(TimestampKlass),
    commentFactory: makeCommentFactory(TimestampKlass),
    impulseFactory: makeImpulseFactory(TimestampKlass),
    timeLogFactory: makeTimeLogFactory(TimestampKlass),
    motionLogFactory: makeMotionLogFactory(TimestampKlass),
    locationLogFactory: makeLocationLogFactory(TimestampKlass),
    debriefLogFactory: makeDebriefLogFactory(TimestampKlass),
    locationFactory: makeLocationFactory(TimestampKlass),
    logSummaryFactory: makeLogSummaryFactory(TimestampKlass),
    profileFactory: makeProfileFactory(TimestampKlass),
    issueFactory: makeIssueFactory(TimestampKlass),
    adminProfileFactory: makeAdminProfileFactory(TimestampKlass),
    supportGroupFactory: makeSupportGroupFactory(TimestampKlass),
    impulseGameplanFactory: makeImpulseGameplanFactory(TimestampKlass),
    successGameplanFactory: makeSuccessGameplanFactory(TimestampKlass),
    setbackGameplanFactory: makeSetbackGameplanFactory(TimestampKlass),
    messageFactory: makeMessageFactory(TimestampKlass),
    timeGameplanFactory: makeTimeGameplanFactory(TimestampKlass),
    patternFactory: makePatternFactory(TimestampKlass),
    locationGameplanFactory: makeLocationGameplanFactory(TimestampKlass),
    recommendationFactory: makeRecommendationFactory(TimestampKlass),
    recommendationRuleFactory: makeRecommendationRuleFactory(TimestampKlass),
    newGameplanRecommendationRuleFactory:
      makeNewGameplanRecommendationRuleFactory(TimestampKlass),
    tacticFactory: makeTacticFactory(TimestampKlass),
  };
}

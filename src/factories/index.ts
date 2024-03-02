import { TimestampLike } from '../utils/TimestampLike';
import { makeApplicationFactory } from './application';
import { makeCommentFactory } from './comment';
import { makeGameplanFactory } from './gameplan';
import { makeIssueFactory } from './issue';
import { makeLocationFactory } from './location';
import {
  makeDebriefLogFactory,
  makeImpulseFactory,
  makeLocationLogFactory,
  makeMotionLogFactory,
  makeTimeLogFactory,
} from './log';
import { makeMessageFactory } from './message';
import { makePatternFactory } from './pattern';
import { makeAdminProfileFactory, makeProfileFactory } from './profile';
import { makeImpulseRecommendationFactory } from './recommendation';
import { makeImpulseRecommendationRuleFactory } from './recommendationRule';
import { makeSupportGroupFactory } from './supportGroup';
import { makeFolderTacticFactory, makeTacticFactory } from './tactic';
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
    profileFactory: makeProfileFactory(TimestampKlass),
    gameplanFactory: makeGameplanFactory(TimestampKlass),
    issueFactory: makeIssueFactory(TimestampKlass),
    adminProfileFactory: makeAdminProfileFactory(TimestampKlass),
    supportGroupFactory: makeSupportGroupFactory(TimestampKlass),
    messageFactory: makeMessageFactory(TimestampKlass),
    patternFactory: makePatternFactory(TimestampKlass),
    impulseRecommendationFactory:
      makeImpulseRecommendationFactory(TimestampKlass),
    impulseRecommendationRuleFactory:
      makeImpulseRecommendationRuleFactory(TimestampKlass),
    tacticFactory: makeTacticFactory(TimestampKlass),
    folderTacticFactory: makeFolderTacticFactory(TimestampKlass),
  };
}

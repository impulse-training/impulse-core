import { TimestampLike } from '../utils/firestore/TimestampLike';
import { makeApplicationFactory } from './application';
import { makeCommentFactory } from './comment';
import { makeIssueFactory } from './issue';
import { makeLocationFactory } from './location';
import {
  makeImpulseLogFactory,
  makeLocationLogFactory,
  makeTimeLogFactory,
} from './log';
import { makeMessageFactory } from './message';
import { makePatternFactory } from './pattern';
import { makeProfileFactory } from './profile';
import {
  makeImpulseStrategyFactory,
  makeTimeStrategyFactory,
} from './strategy';
import { makeSupportGroupFactory } from './supportGroup';
import { makeQuestionTimeTacticFactory, makeTacticFactory } from './tactic';

// Our admin and client apps use the same factories, but the firebase-admin versus firebase client
// libraries respectively. These use different Timestamp classes, so we pass in the class as an
// injected dependency
export function makeFactories(TimestampKlass: typeof TimestampLike) {
  return {
    applicationFactory: makeApplicationFactory(TimestampKlass),
    commentFactory: makeCommentFactory(TimestampKlass),
    impulseFactory: makeImpulseLogFactory(TimestampKlass),
    timeLogFactory: makeTimeLogFactory(TimestampKlass),
    locationLogFactory: makeLocationLogFactory(TimestampKlass),
    locationFactory: makeLocationFactory(TimestampKlass),
    profileFactory: makeProfileFactory(TimestampKlass),
    issueFactory: makeIssueFactory(TimestampKlass),
    supportGroupFactory: makeSupportGroupFactory(TimestampKlass),
    messageFactory: makeMessageFactory(TimestampKlass),
    patternFactory: makePatternFactory(TimestampKlass),
    tacticFactory: makeTacticFactory(TimestampKlass),
    questionTimeTacticFactory: makeQuestionTimeTacticFactory(TimestampKlass),
    impulseStrategyFactory: makeImpulseStrategyFactory(TimestampKlass),
    timeStrategyFactory: makeTimeStrategyFactory(TimestampKlass),
  };
}

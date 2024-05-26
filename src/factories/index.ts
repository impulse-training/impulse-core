import { TimestampLike } from '../utils/firestore/TimestampLike';
import { makeApplicationFactory } from './application';
import { makeCommentFactory } from './comment';
import { dayLogsSummaryFactory } from './dayLogsSummary';
import { makeIssueFactory } from './issue';
import { makeLocationFactory } from './location';
import {
  makeImpulseLogFactory,
  makeLocationLogFactory,
  makeTimeLogFactory,
} from './log';
import { makeProfileFactory } from './profile';
import { profileLogsSummaryFactory } from './profileLogsSummary';
import { makeTimeRoutineFactory } from './routine';
import { makeStrategyFactory } from './strategy';
import { makeSupportGroupFactory } from './supportGroup';
import { makeQuestionTimeTacticFactory, makeTacticFactory } from './tactic';

// Our admin and client apps use the same factories, but the firebase-admin versus firebase client
// libraries respectively. These use different Timestamp classes, so we pass in the class as an
// injected dependency
export function makeFactories(TimestampKlass: typeof TimestampLike) {
  return {
    dayLogsSummaryFactory,
    profileLogsSummaryFactory,
    applicationFactory: makeApplicationFactory(TimestampKlass),
    commentFactory: makeCommentFactory(TimestampKlass),
    impulseFactory: makeImpulseLogFactory(TimestampKlass),
    timeLogFactory: makeTimeLogFactory(TimestampKlass),
    locationLogFactory: makeLocationLogFactory(TimestampKlass),
    locationFactory: makeLocationFactory(TimestampKlass),
    profileFactory: makeProfileFactory(TimestampKlass),
    issueFactory: makeIssueFactory(TimestampKlass),
    supportGroupFactory: makeSupportGroupFactory(TimestampKlass),
    tacticFactory: makeTacticFactory(TimestampKlass),
    questionTimeTacticFactory: makeQuestionTimeTacticFactory(TimestampKlass),
    strategyFactory: makeStrategyFactory(TimestampKlass),
    timeRoutineFactory: makeTimeRoutineFactory(TimestampKlass),
  };
}

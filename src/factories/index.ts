import { TimestampLike } from '../utils/firestore/TimestampLike';
import { makeApplicationFactory } from './application';
import { makeCommentFactory } from './comment';
import { dayLogsSummaryFactory } from './dayLogsSummary';
import { makeFolderFactory } from './folder';
import { makeIssueFactory } from './issue';
import { makeLocationFactory } from './location';
import {
  makeImpulseLogFactory,
  makeLocationLogFactory,
  makeTimeLogFactory,
} from './log';
import { makeProfileFactory } from './profile';
import { makeProfileLogsSummaryFactory } from './profileLogsSummary';
import { makeTimeRoutineFactory } from './routine';
import {
  makeFolderStrategyFactory,
  makeTacticStrategyFactory,
} from './strategy';
import { makeQuestionTimeTacticFactory, makeTacticFactory } from './tactic';

// Our admin and client apps use the same factories, but the firebase-admin versus firebase client
// libraries respectively. These use different Timestamp classes, so we pass in the class as an
// injected dependency
export function makeFactories(TimestampKlass: typeof TimestampLike) {
  return {
    dayLogsSummaryFactory,
    profileLogsSummaryFactory: makeProfileLogsSummaryFactory(TimestampKlass),
    applicationFactory: makeApplicationFactory(TimestampKlass),
    commentFactory: makeCommentFactory(TimestampKlass),
    impulseFactory: makeImpulseLogFactory(TimestampKlass),
    timeLogFactory: makeTimeLogFactory(TimestampKlass),
    locationLogFactory: makeLocationLogFactory(TimestampKlass),
    locationFactory: makeLocationFactory(TimestampKlass),
    profileFactory: makeProfileFactory(TimestampKlass),
    issueFactory: makeIssueFactory(TimestampKlass),
    folderFactory: makeFolderFactory(TimestampKlass),
    folderStrategyFactory: makeFolderStrategyFactory(TimestampKlass),
    tacticStrategyFactory: makeTacticStrategyFactory(TimestampKlass),
    tacticFactory: makeTacticFactory(TimestampKlass),
    questionTimeTacticFactory: makeQuestionTimeTacticFactory(TimestampKlass),
    timeRoutineFactory: makeTimeRoutineFactory(TimestampKlass),
  };
}

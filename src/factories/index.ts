import { TimestampLike } from '../utils/firestore/TimestampLike';
import { makeApplicationFactory } from './application';
import { makeCommentFactory } from './comment';
import { makeDayFactory } from './day';
import { makeFolderFactory } from './folder';
import { makeIssueFactory } from './issue';
import { makeLocationFactory } from './location';
import { makeImpulseLogFactory } from './log';
import { makeProfileFactory } from './profile';
import { makeProfileLogsSummaryFactory } from './profileLogsSummary';
import { makeQuestionTimeTacticFactory } from './question';
import { makeTimeRoutineFactory } from './routine';
import { makeTacticFactory } from './tactic';

// Our admin and client apps use the same factories, but the firebase-admin versus firebase client
// libraries respectively. These use different Timestamp classes, so we pass in the class as an
// injected dependency
export function makeFactories(TimestampKlass: typeof TimestampLike) {
  return {
    applicationFactory: makeApplicationFactory(TimestampKlass),
    commentFactory: makeCommentFactory(TimestampKlass),
    dayFactory: makeDayFactory(TimestampKlass),
    folderFactory: makeFolderFactory(TimestampKlass),
    impulseFactory: makeImpulseLogFactory(TimestampKlass),
    issueFactory: makeIssueFactory(TimestampKlass),
    locationFactory: makeLocationFactory(TimestampKlass),
    profileLogsSummaryFactory: makeProfileLogsSummaryFactory(TimestampKlass),
    profileFactory: makeProfileFactory(TimestampKlass),
    questionTimeFactory: makeQuestionTimeTacticFactory(TimestampKlass),
    timeRoutineFactory: makeTimeRoutineFactory(TimestampKlass),
    tacticFactory: makeTacticFactory(TimestampKlass),
  };
}

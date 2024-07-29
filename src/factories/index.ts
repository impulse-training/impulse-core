import { TimestampLike } from '../utils/firestore/TimestampLike';
import { makeApplicationFactory } from './application';
import { makeCommentFactory } from './comment';
import { makeDayFactory } from './day';
import { makeDaysSummaryFactory } from './daysSummary';
import { makeFolderFactory } from './folder';
import { makeIssueFactory } from './issue';
import { makeLocationFactory } from './location';
import { makeLogFactories } from './log';
import { makeProfileFactory } from './profile';
import { makeQuestionLogFactories } from './question';
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
    issueFactory: makeIssueFactory(TimestampKlass),
    locationFactory: makeLocationFactory(TimestampKlass),
    daysSummaryFactory: makeDaysSummaryFactory(TimestampKlass),
    profileFactory: makeProfileFactory(TimestampKlass),
    timeRoutineFactory: makeTimeRoutineFactory(TimestampKlass),
    tacticFactory: makeTacticFactory(TimestampKlass),
    ...makeQuestionLogFactories(TimestampKlass),
    ...makeLogFactories(TimestampKlass),
  };
}

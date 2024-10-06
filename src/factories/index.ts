import { TimestampLike } from '../utils/firestore/TimestampLike';
import { makeApplicationFactory } from './application';
import { makeDayFactory } from './day';
import { makeDaysSummaryFactory } from './daysSummary';
import { makeIssueFactory } from './issue';
import { makeLocationFactory } from './location';
import { makeLogFactories } from './log';
import { makeProfileFactory } from './profile';
import { makeProfileStrategyFactory } from './profileStrategy';
import { makeQuestionFactories } from './question';
import { makeRoadmapFactory } from './roadmap';
import { makeTimeRoutineFactory } from './routine';
import { makeStrategyFactory } from './strategy';
import { makeSuggestionFactory } from './suggestion';
import { makeTacticFactory } from './tactic';

// Our admin and client apps use the same factories, but the firebase-admin versus firebase client
// libraries respectively. These use different Timestamp classes, so we pass in the class as an
// injected dependency
export function makeFactories(TimestampKlass: typeof TimestampLike) {
  return {
    applicationFactory: makeApplicationFactory(TimestampKlass),
    dayFactory: makeDayFactory(TimestampKlass),
    issueFactory: makeIssueFactory(TimestampKlass),
    locationFactory: makeLocationFactory(TimestampKlass),
    daysSummaryFactory: makeDaysSummaryFactory(TimestampKlass),
    profileFactory: makeProfileFactory(TimestampKlass),
    timeRoutineFactory: makeTimeRoutineFactory(TimestampKlass),
    tacticFactory: makeTacticFactory(TimestampKlass),
    roadmapFactory: makeRoadmapFactory(TimestampKlass),
    suggestionFactory: makeSuggestionFactory(TimestampKlass),
    strategyFactory: makeStrategyFactory(TimestampKlass),
    profileStrategyFactory: makeProfileStrategyFactory(TimestampKlass),
    ...makeQuestionFactories(TimestampKlass),
    ...makeLogFactories(TimestampKlass),
  };
}

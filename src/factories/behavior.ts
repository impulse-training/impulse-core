import * as Factory from 'factory.ts';
import { TimeBehaviorValue } from '../schema/behavior';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeBehaviorFactories = (
  TimestampKlass: typeof TimestampLike
) => ({
  counterBehaviorFactory: Factory.makeFactory<TimeBehaviorValue>({
    ordinal: 0,
    prompt: 'How long did you spend watching youtube?',
    type: 'time',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  }),
  timeBehaviorFactory: Factory.makeFactory<TimeBehaviorValue>({
    ordinal: 0,
    prompt: 'How long did you spend watching youtube?',
    type: 'time',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  }),
  // multipleChoiceBehaviorFactory:
  //   Factory.makeFactory<MultipleChoiceBehaviorValue>({
  //     ordinal: 0,
  //     categories: ['debriefing'],
  //     prompt: 'How are you feeling?',
  //     type: 'multipleChoice',
  //     canAddNewOptions: false,
  //     options: [
  //       {
  //         type: 'string',
  //         text: 'Sad',
  //       },
  //       {
  //         type: 'string',
  //         text: 'Happy',
  //       },
  //     ],
  //     createdAt: TimestampKlass.now(),
  //     updatedAt: TimestampKlass.now(),
  //   }),
});

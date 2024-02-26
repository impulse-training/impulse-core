import * as Factory from 'factory.ts';
import { TacticValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';

export const makeTacticFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<TacticValue>({
    uid: Factory.each(i => i.toString()),
    type: 'task',
    title: 'Go outside',
    description:
      "Sometimes you just need to let it out! Find a private spot (we don't want any distractions!) and scream your heart out. Feel the wind in your hair, the rush of adrenaline, and the release of built-up tension. Let your voice fill the space around you and leave all your worries behind. Don't worry about being too loud, let your inner rockstar shine! Just remember, it's not a permanent solution - once you're ready, come on back and let's find some other ways to cope.",
    language: 'english',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    isTemplate: false,
    backgroundColor: '#FF0000',
  });

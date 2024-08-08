import * as Factory from 'factory.ts';
import { SuggestionValue } from '../schema';
import { TimestampLike } from '../utils';

export const makeSuggestionFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<SuggestionValue>({
    name: 'Impulse default roadmap',
    gptContext: "Let's start with a distraction!",
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    stages: [0],
  });

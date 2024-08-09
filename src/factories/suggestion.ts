import * as Factory from 'factory.ts';
import { SuggestionValue } from '../schema';
import { TimestampLike } from '../utils';

export const makeSuggestionFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<SuggestionValue>({
    title: "Let's start with a distraction!",
    gptContext: '',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    stages: [0],
  });

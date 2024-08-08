import * as Factory from 'factory.ts';
import { RoadmapValue } from '../schema';
import { TimestampLike } from '../utils';

export const makeRoadmapFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<RoadmapValue>({
    name: 'Impulse default roadmap',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    stages: [
      {
        name: 'Initial stage',
        graduationCriteria: {
          requiredWinRate: 0.8,
          requiredWinRateDays: 7,
        },
      },
    ],
  });

import * as yup from 'yup';
import { optionalStringArray } from './utils/array';
import { optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

// A roadmap is a long-term tactic for a user to achieve their behavior change goals. We may end
// up renaming it to "tactic", but a tactic currently means a "tactic or a supportGroup of tactics".
//
// A roadmap consists of stages, with "graduation criteria". When a user passes the graduation
// criteria for a stage, they move on to the next stage. The graduation criteria currently only
// includes a required win rate, but we may add more criteria in the future (including "passing" a
// conversation, which is a thread, as in, having a moment of enlightenment).

// Here we define the over-arching tactic for a roadmap stage. For example, "Distraction - we
// want to use distraction-oriented techniques to redirect impulses and improve win-rates"
const roadmapStage = yup.object({
  name: yup.string().required(),
  // There's a suggestions collection here
  graduationCriteria: yup.object({
    // This rate../
    requiredWinRate: yup.number().required(),
    // ... must be sustained over this number of days
    requiredWinRateDays: yup.number().required(),
  }),
});

export const roadmapSchema = yup.object({
  name: yup.string().required(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  stages: yup.array().of(roadmapStage).required(),
  recommendedForIssueIds: optionalStringArray.max(10, "can't be more than 10"),
  recommendedForIssueOrdinals: optionalObjectOf(yup.number().required()),
});

export type RoadmapValue = yup.InferType<typeof roadmapSchema>;

// import { map, sortBy } from 'lodash';
// import { BehaviorCategory, BehaviorValue } from '../schema';

// export function getBehaviors(
//   behaviorsById: Record<string, BehaviorValue>,
//   category: BehaviorCategory
// ) {
//   // First, filter the behaviors that have the category
//   const behaviorsWithIds = map(behaviorsById, (behavior, id) => ({
//     id,
//     behavior,
//   }));
//   const behaviors = behaviorsWithIds.filter(({ behavior }) =>
//     behavior.categories?.includes(category)
//   );
//   return sortBy(behaviors, ({ behavior }) => behavior.ordinals?.[category]);
// }

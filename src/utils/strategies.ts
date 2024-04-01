import { sortBy } from 'lodash';
import { StrategyValue } from '../schema';

// Given a set of strategies and an ordered list of parent issue ids, return the applicable strategies
// in order of specificity. In context:

// Strategys can be for any number of issues, e.g. we may have Strategy A for both "Substance
// Addictions" and "Food Addictions", and Strategy B for "Addictions". This function should return
// strategies sorted by the specificity of the issue. If the gameplan is for "Substance Addictions",
// we should return [Strategy A, Strategy B] in the example above. We do this by sorting by the index
// of any matching issue in the gameplan's parentIssueIds, which represents an array of parents in
// order of least specific to most specific.
export function sortStrategys(
  strategies: Array<{ _data: StrategyValue; id: string }>,
  parentIssueIds: Array<string>
) {
  return sortBy(strategies, strategy =>
    parentIssueIds.findIndex(issueId =>
      strategy._data.forIssueIds.includes(issueId)
    )
  );
}

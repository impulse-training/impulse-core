import { sortBy } from 'lodash';
import { ProgramValue } from '../schema';

// Given a set of programs and an ordered list of parent issue ids, return the applicable programs
// in order of specificity. In context:

// Programs can be for any number of issues, e.g. we may have Program A for both "Substance
// Addictions" and "Food Addictions", and Program B for "Addictions". This function should return
// programs sorted by the specificity of the issue. If the gameplan is for "Substance Addictions",
// we should return [Program A, Program B] in the example above. We do this by sorting by the index
// of any matching issue in the gameplan's parentIssueIds, which represents an array of parents in
// order of least specific to most specific.
export function sortPrograms(
  programs: Array<{ _data: ProgramValue; id: string }>,
  parentIssueIds: Array<string>
) {
  return sortBy(programs, program =>
    parentIssueIds.findIndex(issueId =>
      program._data.forIssueIds.includes(issueId)
    )
  );
}

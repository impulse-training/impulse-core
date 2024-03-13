"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortPrograms = void 0;
const lodash_1 = require("lodash");
// Given a set of programs and an ordered list of parent issue ids, return the applicable programs
// in order of specificity. In context:
// Programs can be for any number of issues, e.g. we may have Program A for both "Substance
// Addictions" and "Food Addictions", and Program B for "Addictions". This function should return
// programs sorted by the specificity of the issue. If the gameplan is for "Substance Addictions",
// we should return [Program A, Program B] in the example above. We do this by sorting by the index
// of any matching issue in the gameplan's parentIssueIds, which represents an array of parents in
// order of least specific to most specific.
function sortPrograms(programs, parentIssueIds) {
    return (0, lodash_1.sortBy)(programs, program => parentIssueIds.findIndex(issueId => program._data.forIssueIds.includes(issueId)));
}
exports.sortPrograms = sortPrograms;

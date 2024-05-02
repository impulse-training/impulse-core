"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const option_1 = require("../option");
describe('optionSortValueForDisplay', () => {
    it('returns success options before setbacks', () => {
        const success = { lessThanOrEqualTo: 0 };
        const setback = { greaterThan: 0 };
        const sorted = (0, lodash_1.sortBy)([setback, success], option_1.optionSortValueForDisplay);
        expect(sorted[0]).toBe(success);
    });
});

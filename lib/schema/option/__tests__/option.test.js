"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const __1 = require("..");
describe('optionSortValueForDisplay', () => {
    it('returns success options before setbacks', () => {
        const success = { lessThanOrEqualTo: 0 };
        const setback = { greaterThan: 0 };
        const sorted = (0, lodash_1.sortBy)([setback, success], __1.optionSortValueForDisplay);
        expect(sorted[0]).toBe(success);
    });
});

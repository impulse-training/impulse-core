import { sortBy } from 'lodash';
import { optionSortValueForDisplay } from '../option';

describe('optionSortValueForDisplay', () => {
  it('returns success options before setbacks', () => {
    const success = { lessThanOrEqualTo: 0 };
    const setback = { greaterThan: 0 };

    const sorted = sortBy([setback, success], optionSortValueForDisplay);
    expect(sorted[0]).toBe(success);
  });
});

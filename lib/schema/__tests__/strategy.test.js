"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const factories_1 = require("../../__tests__/factories");
const strategy_1 = require("../strategy");
describe('strategy', () => {
    it('is valid without timestamps', () => {
        const strategy = factories_1.factories.impulseStrategyFactory.build({
            createdAt: undefined,
            updatedAt: undefined,
        });
        let errors = [];
        try {
            strategy_1.strategySchema.validateSync(strategy, { abortEarly: false });
        }
        catch (error) {
            if (error instanceof yup_1.ValidationError) {
                error.inner.forEach(err => errors.push(err));
            }
            else {
                // Error is unexpected
                throw error;
            }
        }
        expect(errors.length).toEqual(0);
    });
});

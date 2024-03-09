"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const factories_1 = require("../../__tests__/factories");
const pattern_1 = require("../pattern");
describe('pattern', () => {
    it("isn't valid without a measure", () => {
        const pattern = factories_1.factories.patternFactory.build({
            measureTactic: undefined,
        });
        let errors = [];
        try {
            pattern_1.patternSchema.validateSync(pattern, { abortEarly: false });
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
        expect(errors.length).toEqual(1);
        expect(errors[0].message).toEqual('measureTactic is a required field');
    });
    it('derp', () => {
        const pattern = {};
        let errors = [];
        try {
            pattern_1.patternSchema.validateSync(pattern, { abortEarly: false });
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
        expect(errors.length).toEqual(1);
        expect(errors[0].message).toEqual('measureTactic is a required field');
    });
});

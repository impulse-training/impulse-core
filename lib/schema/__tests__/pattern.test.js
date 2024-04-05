"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const factories_1 = require("../../__tests__/factories");
const pattern_1 = require("../pattern");
describe('pattern', () => {
    it("isn't valid without a question", () => {
        const pattern = factories_1.factories.patternFactory.build({
            questionTactic: undefined,
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
        expect(errors[0].message).toEqual('questionTactic is a required field');
    });
    it("doesn't blow up when validating an empty object", () => {
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
        const errorMessages = errors.map(error => error.message);
        expect(errors.length).toBeGreaterThan(0);
        expect(errorMessages).toContain('questionTactic is a required field');
    });
    it('ensures that the question tactic has a type of question-time or question-counter', () => {
        const pattern = {
            questionTactic: { type: 'question?' },
        };
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
        const errorMessages = errors.map(error => error.message);
        expect(errors.length).toBeGreaterThan(0);
        expect(errorMessages).toContain('questionTactic.type must be one of the following values: question-time, question-counter');
    });
});

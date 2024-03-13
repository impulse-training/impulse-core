"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const factories_1 = require("../../__tests__/factories");
const program_1 = require("../program");
describe('program', () => {
    it('is valid without timestamps', () => {
        const program = factories_1.factories.programFactory.build({
            createdAt: undefined,
            updatedAt: undefined,
        });
        let errors = [];
        try {
            program_1.programSchema.validateSync(program, { abortEarly: false });
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

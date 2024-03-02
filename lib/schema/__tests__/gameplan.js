"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const gameplan_1 = require("../gameplan");
describe('gameplan', () => {
    it("isn't valid with a time routine with no weekdays", () => {
        const gameplan = {
            time: {
                start: '10:00',
                end: '12:00',
                duration: 30,
                weekdays: [],
            },
        };
        let errors = [];
        try {
            gameplan_1.gameplanSchema.validateSync(gameplan, { abortEarly: false });
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
    });
});

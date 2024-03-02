"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const factories_1 = require("../../__tests__/factories");
const gameplan_1 = require("../gameplan");
describe('gameplan', () => {
    it("isn't valid with a time routine with no weekdays", () => {
        const gameplan = factories_1.factories.gameplanFactory.build({
            time: {
                foobar: {
                    hour: 20,
                    minute: 0,
                    weekdays: [],
                },
            },
        });
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
        console.log({ errors });
        expect(errors.length).toEqual(1);
    });
});

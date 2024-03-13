"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factories_1 = require("../../__tests__/factories");
const utils_1 = require("../../__tests__/utils");
const test_1 = require("../../factories/test");
const gameplan_1 = require("../gameplan");
describe('gameplan', () => {
    it("isn't valid with a time routine with no weekdays", () => {
        const gameplan = factories_1.factories.gameplanFactory.build({
            time: {
                foobar: {
                    hour: 20,
                    minute: 0,
                    weekdays: [],
                    tacticIds: [],
                    suggestedTacticIds: [],
                    title: 'At 8pm',
                },
            },
        });
        const errors = (0, utils_1.getErrors)(gameplan, gameplan_1.gameplanSchema);
        expect(errors.length).toEqual(1);
    });
    it.only('is valid with an urge surfing tactic in tacticsById', () => {
        const gameplan = factories_1.factories.gameplanFactory.build({
            tacticsById: {
                abc: test_1.tacticFactory.build({ type: 'urge-surfing' }),
            },
        });
        const errors = (0, utils_1.getErrors)(gameplan, gameplan_1.gameplanSchema);
        console.log({ errors });
        expect(errors.length).toEqual(0);
    });
});

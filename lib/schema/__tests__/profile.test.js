"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factories_1 = require("../../__tests__/factories");
const utils_1 = require("../../__tests__/utils");
const profile_1 = require("../profile");
describe('profile', () => {
    it("isn't valid with a time profile with no weekdays", () => {
        const profile = factories_1.factories.profileFactory.build({
            scheduledStrategies: {
                abc123: {
                    hour: 20,
                    minute: 0,
                    weekdays: [],
                    tacticIds: [],
                    name: 'At 8pm',
                },
            },
        });
        const errors = (0, utils_1.getErrors)(profile, profile_1.profileSchema);
        expect(errors.length).toEqual(1);
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const factories_1 = require("../../../factories");
const TimestampLike_1 = require("../../firestore/TimestampLike");
const { regularLogFactory } = (0, factories_1.makeFactories)(TimestampLike_1.TimestampLike);
describe(__1.logTextForGpt, () => {
    describe('for a log that has answers to behaviors', () => {
        it('returns the correct payload', () => {
            const log = regularLogFactory.build({
                text: 'I messed up!',
                behaviorData: {
                    behavior1: {
                        behavior: {
                            name: 'Time spent watching',
                        },
                        data: {
                            timeSeconds: 3 * 60 * 60,
                            formattedValue: '3 hrs',
                        },
                    },
                },
            });
            const gptPayload = (0, __1.logTextForGpt)(log);
            expect(gptPayload).toEqual('I messed up! Time spent watching: 3 hrs');
        });
    });
});

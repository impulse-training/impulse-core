"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("../../factories/test");
describe('Log', () => {
    describe('strategies', () => {
        describe('with a multiple choice question tactic with a selected choice', () => {
            const questionTactic = test_1.tacticFactory.build({
                type: 'question-multiple-choice',
                title: 'How are you?',
                choices: {
                    abc: {
                        text: 'Sad',
                        strategies: {
                            strategy1: {
                                ordinal: 1,
                                type: 'impulse',
                                name: 'Get moving',
                                tacticIds: ['tactic2'],
                            },
                        },
                    },
                },
            });
            const walkTactic = test_1.tacticFactory.build({
                title: 'Go for a walk',
            });
            const log = test_1.impulseFactory.build({
                tacticsById: {
                    tactic1: questionTactic,
                    tactic2: walkTactic,
                },
                tacticData: {
                    tactic1: {
                        value: 'strategy1',
                    },
                },
            });
        });
    });
});

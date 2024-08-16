"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const factories_1 = require("../../../factories");
const TimestampLike_1 = require("../../firestore/TimestampLike");
const { messageLogFactory, questionsLogFactory, strategiesLogFactory } = (0, factories_1.makeFactories)(TimestampLike_1.TimestampLike);
describe(__1.logGptPayload, () => {
    describe('for a message log', () => {
        it('returns the correct payload for a message sent by GPT', () => {
            const log = messageLogFactory.build({
                isGptSender: true,
                text: 'Hello, world!',
            });
            expect((0, __1.logGptPayload)(log)).toEqual([
                {
                    role: 'assistant',
                    content: 'Hello, world!',
                },
            ]);
        });
    });
    describe('for a questions log', () => {
        it('returns the correct payload', () => {
            const log = questionsLogFactory.build({
                text: 'Hello, world!',
                questionsById: {
                    question1: {
                        prompt: 'How long have you been facing this?',
                    },
                    question2: {
                        prompt: 'How strong is the urge right now?',
                    },
                    question3: {
                        prompt: 'How many cigarettes did you smoke?',
                    },
                },
                questionData: {
                    question1: {
                        stringValue: 'For more than 6 years',
                    },
                    question2: {
                        stringValue: '8/10',
                    },
                    question3: {
                        stringValue: '3',
                        label: 'Setback',
                    },
                },
            });
            const gptPayload = (0, __1.logGptPayload)(log);
            expect(gptPayload).toEqual([
                {
                    role: 'assistant',
                    content: 'How long have you been facing this?',
                },
                {
                    role: 'user',
                    content: 'For more than 6 years',
                },
                {
                    role: 'assistant',
                    content: 'How strong is the urge right now?',
                },
                {
                    role: 'user',
                    content: '8/10',
                },
                {
                    role: 'assistant',
                    content: 'How strong is the urge right now?',
                },
                {
                    role: 'user',
                    content: '8/10',
                },
            ]);
        });
    });
    describe('for a strategies log', () => {
        it('returns the correct payload', () => {
            const log = strategiesLogFactory.build({
                strategiesById: {
                    tactic1: {
                        prompt: 'Go for a walk',
                    },
                    tactic2: {
                        prompt: 'Lie down for a minute',
                    },
                },
                completedTacticIds: ['tactic1'],
            });
            const gptPayload = (0, __1.logGptPayload)(log);
            expect(gptPayload).toEqual([
                {
                    role: 'assistant',
                    content: 'SUGGESTED ACTIONS: Go for a walk|Lie down for a minute',
                },
                {
                    role: 'user',
                    content: "I'VE COMPLETED: Go for a walk",
                },
            ]);
        });
    });
});

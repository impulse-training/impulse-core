"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factories_1 = require("../../factories");
const FakeTimestamp_1 = require("../../utils/FakeTimestamp");
const challenge_1 = require("../challenge");
describe('Challenge', () => {
    describe('processLog', () => {
        // Given a new log, update the dates of the challenge if applicable.
        const uid = 'abc123';
        const date = new Date('2023-03-26');
        const challengeData = factories_1.challengeFactory.build({
            type: 'setbacks',
            days: 4,
            startDate: { toDate: () => date },
            requiredLogType: 'impulse',
            eligibleLogDatesById: {},
            datesCumulativeProgress: {},
            currentDayCount: 0,
            isTemplate: false,
            consecutive: true,
        });
        const challenge = new challenge_1.Challenge('id', challengeData, FakeTimestamp_1.FakeTimestamp);
        describe('with an eligible log', () => {
            const log = factories_1.impulseFactory.build({
                uid,
                createdAt: { toDate: () => date },
                startTime: { toDate: () => date },
                timezone: 'America/Bogota',
                patternIds: [],
                type: 'impulse',
                outcome: 'indeterminate',
            });
            it('returns the log date to the challenge', () => {
                const result = challenge.processLog('def456', log);
                expect(result).toEqual({
                    def456: '2023-03-25',
                });
            });
        });
        describe('with an ineligible log', () => {
            const log = factories_1.motionLogFactory.build({
                uid,
                createdAt: { toDate: () => date },
                startTime: { toDate: () => date },
            });
            it('returns the eligibleLogDatesById object, unchanged', () => {
                const result = challenge.processLog('def456', log);
                expect(result).toEqual({});
            });
        });
    });
    describe('recalculateProgress', () => {
        describe('with a set of dates', () => {
            const date = new Date('2023-03-25');
            const challengeData = factories_1.challengeFactory.build({
                type: 'button',
                startDate: { toDate: () => date },
                icon: 'test',
                days: 3,
                requiredLogType: 'impulse',
                dailyMinimum: 1,
                eligibleLogDatesById: {
                    abc123: '2023-03-25',
                    def456: '2023-03-26',
                    ghi789: '2023-03-27',
                },
                datesCumulativeProgress: {},
                currentDayCount: 0,
                consecutive: true,
                isTemplate: false,
            });
            const challenge = new challenge_1.Challenge('id', challengeData, FakeTimestamp_1.FakeTimestamp);
            it('writes the datesCumulativeProgress and currentDayCount properties', () => {
                const result = challenge.recalculateProgress();
                expect(result).toEqual({
                    completedAt: expect.anything(),
                    countsByDate: {
                        '2023-03-24': 0,
                        '2023-03-25': 1,
                        '2023-03-26': 1,
                        '2023-03-27': 1,
                    },
                    datesCumulativeProgress: {
                        '2023-03-24': 0,
                        '2023-03-25': 1,
                        '2023-03-26': 2,
                        '2023-03-27': 3,
                    },
                    currentDayCount: 3,
                });
            });
        });
    });
    describe('days', () => {
        describe('with a button challenge', () => {
            const challenge = new challenge_1.Challenge('abc', factories_1.challengeFactory.build({
                type: 'button',
            }), FakeTimestamp_1.FakeTimestamp);
            it('returns the right name', () => {
                expect(challenge.name).toEqual('Wear the impulse button for 5 days');
            });
        });
        describe('with a tactic challenge', () => {
            const challenge = new challenge_1.Challenge('abc', factories_1.challengeFactory.build({
                type: 'setbacks',
            }), FakeTimestamp_1.FakeTimestamp);
            it('returns the right name', () => {
                expect(challenge.name).toEqual('Go without setbacks for 5 days');
            });
        });
    });
    describe('name', () => {
        it('returns the right name for a button challenge with multiple days', () => {
            const challenge = new challenge_1.Challenge('id', factories_1.challengeFactory.build({
                type: 'button',
                days: 4,
            }), FakeTimestamp_1.FakeTimestamp);
            expect(challenge.name).toEqual('Wear the impulse button for 4 days');
        });
        it('returns the right name for a button challenge for a single day', () => {
            const challenge = new challenge_1.Challenge('id', factories_1.challengeFactory.build({
                type: 'button',
                days: 1,
            }), FakeTimestamp_1.FakeTimestamp);
            expect(challenge.name).toEqual('Wear the impulse button for 1 day');
        });
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reminder_1 = require("../reminder");
describe('Reminder classes', () => {
    const uid = 'abc123';
    const tacticId = 'def456';
    describe('TimeReminder', () => {
        it('should return null if weekdays array is empty', () => {
            const reminder = new reminder_1.TimeReminder('1', {
                uid,
                tacticId,
                createdAt: new Date(),
                updatedAt: new Date(),
                type: 'time',
                weekdays: [],
                hour: 12,
                minute: 0,
            });
            expect(reminder.summary).toBeNull();
        });
        it('should return the correct summary for every day', () => {
            const reminder = new reminder_1.TimeReminder('1', {
                uid,
                tacticId,
                createdAt: new Date(),
                updatedAt: new Date(),
                type: 'time',
                weekdays: [1, 2, 3, 4, 5, 6, 7],
                hour: 12,
                minute: 0,
            });
            expect(reminder.summary).toBe('Every day at 12:00 PM');
        });
        it('should return the correct summary for every weekday', () => {
            const reminder = new reminder_1.TimeReminder('1', {
                uid,
                tacticId,
                createdAt: new Date(),
                updatedAt: new Date(),
                type: 'time',
                weekdays: [2, 3, 4, 5, 6],
                hour: 12,
                minute: 0,
            });
            expect(reminder.summary).toBe('Every weekday at 12:00 PM');
        });
        it('should return the correct summary for specific weekdays', () => {
            const reminder = new reminder_1.TimeReminder('1', {
                uid,
                tacticId,
                createdAt: new Date(),
                updatedAt: new Date(),
                type: 'time',
                weekdays: [1, 3, 5],
                hour: 12,
                minute: 0,
            });
            expect(reminder.summary).toBe('On Sundays, Tuesdays, and Thursdays at 12:00 PM');
        });
        it('should return the correct summary for specific weekdays', () => {
            const reminder = new reminder_1.TimeReminder('1', {
                uid,
                tacticId,
                createdAt: new Date(),
                updatedAt: new Date(),
                type: 'time',
                weekdays: [3, 2, 4, 6, 5],
                hour: 1,
                minute: 0,
            });
            expect(reminder.summary).toBe('Every weekday at 1:00 AM');
        });
    });
    describe('LocationReminder', () => {
        it('should return the correct summary', () => {
            const reminder = new reminder_1.LocationReminder('1', {
                uid,
                tacticId,
                createdAt: new Date(),
                updatedAt: new Date(),
                type: 'location',
                locationId: 'abc',
                mode: 'enter',
            }, {
                uid,
                createdAt: new Date(),
                address: '123 fake st',
                reminderIds: [],
                name: 'Home',
                latitude: 0,
                longitude: 0,
            });
            expect(reminder.summary).toBe('When I arrive at Home');
        });
    });
});

import { LocationGameplan, TimeGameplan } from '../gameplan';

describe('Gameplan classes', () => {
  const uid = 'abc123';
  const tacticIds = ['def456'];

  describe('TimeGameplan', () => {
    describe('summary', () => {
      it('should return null if weekdays array is empty', () => {
        const gameplan = new TimeGameplan('1', {
          uid,
          tacticIds,
          createdAt: new Date() as any,
          updatedAt: new Date() as any,
          timezone: 'America/Bogota',
          type: 'time',
          weekdays: [],
          hour: 12,
          minute: 0,
          suggestedTacticIds: [],
        });
        expect(gameplan.summary).toBeNull();
      });

      it('should return the correct summary for every day', () => {
        const gameplan = new TimeGameplan('1', {
          uid,
          tacticIds,
          createdAt: new Date() as any,
          updatedAt: new Date() as any,
          timezone: 'America/Bogota',
          type: 'time',
          weekdays: [1, 2, 3, 4, 5, 6, 7],
          hour: 12,
          minute: 0,
          suggestedTacticIds: [],
        });
        expect(gameplan.summary).toBe('Every day at 12:00 PM');
      });

      it('should return the correct summary for every weekday', () => {
        const gameplan = new TimeGameplan('1', {
          uid,
          tacticIds,
          createdAt: new Date() as any,
          updatedAt: new Date() as any,
          timezone: 'America/Bogota',
          type: 'time',
          weekdays: [2, 3, 4, 5, 6],
          hour: 12,
          minute: 0,
          suggestedTacticIds: [],
        });
        expect(gameplan.summary).toBe('Every weekday at 12:00 PM');
      });

      it('should return the correct summary for specific weekdays', () => {
        const gameplan = new TimeGameplan('1', {
          uid,
          tacticIds,
          createdAt: new Date() as any,
          updatedAt: new Date() as any,
          timezone: 'America/Bogota',
          type: 'time',
          weekdays: [1, 3, 5],
          hour: 12,
          minute: 0,
          suggestedTacticIds: [],
        });
        expect(gameplan.summary).toBe(
          'On Sundays, Tuesdays, and Thursdays at 12:00 PM'
        );
      });

      it('should return the correct summary for specific weekdays', () => {
        const gameplan = new TimeGameplan('1', {
          uid,
          tacticIds,
          createdAt: new Date() as any,
          updatedAt: new Date() as any,
          timezone: 'America/Bogota',
          type: 'time',
          weekdays: [3, 2, 4, 6, 5],
          hour: 1,
          minute: 0,
          suggestedTacticIds: [],
        });
        expect(gameplan.summary).toBe('Every weekday at 1:00 AM');
      });

      it('should return the correct summary for all days but one', () => {
        const gameplan = new TimeGameplan('1', {
          uid,
          tacticIds,
          createdAt: new Date() as any,
          updatedAt: new Date() as any,
          timezone: 'America/Bogota',
          type: 'time',
          weekdays: [1, 2, 3, 4, 5, 6],
          hour: 1,
          minute: 0,
          suggestedTacticIds: [],
        });
        expect(gameplan.summary).toBe('Daily except Saturdays at 1:00 AM');
      });
    });
  });

  describe('LocationGameplan', () => {
    it('should return the correct summary', () => {
      const gameplan = new LocationGameplan(
        '1',
        {
          uid,
          tacticIds,
          createdAt: new Date() as any,
          updatedAt: new Date() as any,
          type: 'location',
          locationId: 'abc',
          mode: 'enter',
          suggestedTacticIds: [],
        },
        {
          uid,
          createdAt: new Date() as any,
          updatedAt: new Date() as any,
          address: '123 fake st',
          name: 'Home',
          latitude: 0,
          longitude: 0,
          gameplanIds: [],
        }
      );
      expect(gameplan.summary).toBe('When I arrive at Home');
    });
  });
});

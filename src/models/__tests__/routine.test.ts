import { LocationRoutine, TimeRoutine } from '../routine';

describe('Routine classes', () => {
  const uid = 'abc123';

  describe('TimeRoutine', () => {
    describe('summary', () => {
      it('should return null if weekdays array is empty', () => {
        const routine = new TimeRoutine('1', {
          uid,
          createdAt: new Date() as any,
          updatedAt: new Date() as any,
          timezone: 'America/Bogota',
          type: 'time',
          weekdays: [],
          hour: 12,
          minute: 0,
          summary: '',
          title: '',
        });
        expect(routine.summary).toBeNull();
      });

      it('should return the correct summary for every day', () => {
        const routine = new TimeRoutine('1', {
          uid,
          createdAt: new Date() as any,
          updatedAt: new Date() as any,
          timezone: 'America/Bogota',
          type: 'time',
          weekdays: [1, 2, 3, 4, 5, 6, 7],
          hour: 12,
          minute: 0,
          summary: '',
          title: '',
        });
        expect(routine.summary).toBe('Every day at 12:00 PM');
      });

      it('should return the correct summary for every weekday', () => {
        const routine = new TimeRoutine('1', {
          uid,
          createdAt: new Date() as any,
          updatedAt: new Date() as any,
          timezone: 'America/Bogota',
          type: 'time',
          weekdays: [2, 3, 4, 5, 6],
          hour: 12,
          minute: 0,
          summary: '',
          title: '',
        });
        expect(routine.summary).toBe('Every weekday at 12:00 PM');
      });

      it('should return the correct summary for specific weekdays', () => {
        const routine = new TimeRoutine('1', {
          uid,
          createdAt: new Date() as any,
          updatedAt: new Date() as any,
          timezone: 'America/Bogota',
          type: 'time',
          weekdays: [1, 3, 5],
          hour: 12,
          minute: 0,
          summary: '',
          title: '',
        });
        expect(routine.summary).toBe(
          'Sundays, Tuesdays, and Thursdays at 12:00 PM'
        );
      });

      it('should return the correct summary for specific weekdays', () => {
        const routine = new TimeRoutine('1', {
          uid,
          createdAt: new Date() as any,
          updatedAt: new Date() as any,
          timezone: 'America/Bogota',
          type: 'time',
          weekdays: [3, 2, 4, 6, 5],
          hour: 1,
          minute: 0,
          summary: '',
          title: '',
        });
        expect(routine.summary).toBe('Every weekday at 1:00 AM');
      });

      it('should return the correct summary for all days but one', () => {
        const routine = new TimeRoutine('1', {
          uid,
          createdAt: new Date() as any,
          updatedAt: new Date() as any,
          timezone: 'America/Bogota',
          type: 'time',
          weekdays: [1, 2, 3, 4, 5, 6],
          hour: 1,
          minute: 0,
          summary: '',
          title: '',
        });
        expect(routine.summary).toBe('Daily except Saturdays at 1:00 AM');
      });
    });
  });

  describe('LocationRoutine', () => {
    it('should return the correct summary', () => {
      const routine = new LocationRoutine(
        '1',
        {
          uid,
          createdAt: new Date() as any,
          updatedAt: new Date() as any,
          type: 'location',
          locationId: 'abc',
          mode: 'enter',
          summary: '',
          title: '',
        },
        {
          uid,
          createdAt: new Date() as any,
          updatedAt: new Date() as any,
          address: '123 fake st',
          name: 'Home',
          latitude: 0,
          longitude: 0,
          routineIds: [],
        }
      );
      expect(routine.summary).toBe('When I arrive at Home');
    });
  });
});

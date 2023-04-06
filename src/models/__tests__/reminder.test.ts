import { LocationReminder, TimeReminder } from '../reminder';

describe('Reminder classes', () => {
  const uid = 'abc123';
  const tacticId = 'def456';

  describe('TimeReminder', () => {
    it('should return null if weekdays array is empty', () => {
      const reminder = new TimeReminder('1', {
        uid,
        tacticId,
        createdAt: new Date() as any,
        type: 'time',
        weekdays: [],
        hour: 12,
        minute: 0,
      });
      expect(reminder.summary).toBeNull();
    });

    it('should return the correct summary for every day', () => {
      const reminder = new TimeReminder('1', {
        uid,
        tacticId,
        createdAt: new Date() as any,
        type: 'time',
        weekdays: [0, 1, 2, 3, 4, 5, 6],
        hour: 12,
        minute: 0,
      });
      expect(reminder.summary).toBe('Every day at 12:00 PM');
    });

    it('should return the correct summary for every weekday', () => {
      const reminder = new TimeReminder('1', {
        uid,
        tacticId,
        createdAt: new Date() as any,
        type: 'time',
        weekdays: [2, 3, 4, 5, 6],
        hour: 12,
        minute: 0,
      });
      expect(reminder.summary).toBe('Every weekday at 12:00 PM');
    });

    it('should return the correct summary for specific weekdays', () => {
      const reminder = new TimeReminder('1', {
        uid,
        tacticId,
        createdAt: new Date() as any,
        type: 'time',
        weekdays: [1, 3, 5],
        hour: 12,
        minute: 0,
      });
      expect(reminder.summary).toBe(
        'Monday, Wednesday, and Friday at 12:00 PM'
      );
    });
  });

  describe('LocationReminder', () => {
    it('should return the correct summary', () => {
      const reminder = new LocationReminder(
        '1',
        {
          uid,
          tacticId,
          createdAt: new Date() as any,
          type: 'location',
          locationId: 'abc',
          mode: 'enter',
        },
        {
          uid,
          createdAt: new Date() as any,
          address: '123 fake st',
          reminderIds: [],
          name: 'Home',
          latitude: 0,
          longitude: 0,
        }
      );
      expect(reminder.summary).toBe('When I arrive Home');
    });
  });
});

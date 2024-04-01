import { factories } from '../../__tests__/factories';
import { getErrors } from '../../__tests__/utils';
import { profileSchema } from '../profile';

describe('profile', () => {
  it("isn't valid with a time profile with no weekdays", () => {
    const profile = factories.profileFactory.build({
      scheduledStrategies: [
        {
          hour: 20,
          minute: 0,
          weekdays: [],
          tacticIds: [],
          title: 'At 8pm',
        },
      ],
    });

    const errors = getErrors(profile, profileSchema);
    expect(errors.length).toEqual(1);
  });
});

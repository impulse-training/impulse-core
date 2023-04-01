import * as Factory from 'factory.ts';
import { ImpulseLogValue } from '../schema/logs';

export const impulseFactory = Factory.makeFactory<ImpulseLogValue>({
  uid: Factory.each(i => i.toString()),
  type: 'impulse',
  createdAt: null as any,
  startTime: null as any,
  timezone: 'America/Botota',
  isDisplayable: true,
  location: {
    latitude: 1,
    longitude: 1,
  },
  outcome: 'indeterminate',
  debriefNotes: '',
  patternIds: [],
  locationIsFetching: false,
});

import * as Factory from 'factory.ts';
import { ApplicationValue } from '../schema';

export const applicationFactory = Factory.makeFactory<ApplicationValue>({
  createdAt: null as any,
  updatedAt: null as any,
  dateOfBirth: '1900-01-01',
  state: 'pending',
  email: 'fake@impulse.training',
  duration: '1 month',
  gender: 'male',
  location: 'Adelaide',
  message: 'I want to stop smoking.',
  name: 'Moopy',
  phone: '123456789',
});

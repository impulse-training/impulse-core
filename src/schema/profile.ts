import { AppStateStatus } from 'react-native';
import * as yup from 'yup';
import { TimestampLike } from '../utils';
import { notificationOptionSchema } from './notification';
import { WithTacticsById, tacticSchema } from './tactic';
import { optionalStringArray } from './utils/array';
import { objectOf, optionalObjectOf } from './utils/objectOf';
import {
  locationStrategySchema,
  strategySchema,
  timeStrategySchema,
} from './utils/strategy';
import { optionalTimestampSchema } from './utils/timestamp';

export const profileSchema = yup.object().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,

  activeImpulseId: yup.string().optional(),
  currentAppState: yup.mixed<AppStateStatus>().optional(), // Define validation for AppStateStatus if needed
  lastActiveAt: yup.date().optional(),
  expoPushToken: yup.string().optional(),
  widgetInstalledAt: optionalTimestampSchema,
  notificationPreferences: optionalObjectOf(
    yup.array().of(notificationOptionSchema)
  ),
  androidPermissions: optionalObjectOf(yup.boolean().required()),
  parentIssueIds: yup.array().of(yup.string()).optional(),
  region: yup.string().nullable().optional(),
  timezone: yup.string().required(),
  invitationCode: yup.string().required(),
  programId: yup.string().notRequired(),
  scheduledNotificationIds: optionalStringArray,

  // My set of tactics for overcoming impulses
  impulseStrategiesByPattern: objectOf(yup.array(strategySchema)),
  scheduledStrategies: yup.array(timeStrategySchema.required()).required(),
  locationStrategies: yup.array(locationStrategySchema.required()).required(),
  // The any keyword helps to reduce the complexity of generated types. If we leave it up to yup,
  // it will compile very complex union types, but we if do it ourselves, we can simply say
  // tacticsById is a Record<string, TacticValue> and be done with it.
  tacticsById: objectOf(tacticSchema) as any,
});

export type ProfileValue = WithTypes<typeof profileSchema>;

type WithTypes<T extends yup.ISchema<unknown>> = WithTacticsById<
  yup.InferType<T>
> & {
  createdAt: TimestampLike;
  updatedAt: TimestampLike;
};

import { AppStateStatus } from 'react-native';
import * as yup from 'yup';
import { notificationOptionSchema } from './notification';
import { optionalStringArray } from './utils/array';
import { optionalObjectOf } from './utils/objectOf';
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
  isTourCompleted: yup.boolean(),
  defaultNickname: yup.string().optional(),
  androidPermissions: optionalObjectOf(yup.boolean().required()),
  parentIssueIds: optionalStringArray,
  region: yup.string().nullable().optional(),
  timezone: yup.string().required(),
  invitationCode: yup.string().required(),
  scheduledNotificationIds: optionalStringArray,
  seenRecommendedStrategyIds: optionalStringArray,
});

export type ProfileValue = yup.InferType<typeof profileSchema>;

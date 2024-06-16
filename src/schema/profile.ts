import { AppStateStatus } from 'react-native';
import * as yup from 'yup';
import { notificationOptionSchema } from './notification';
import { optionalStringArray, requiredStringArray } from './utils/array';
import { optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const profileSchema = yup.object().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  lastActiveAt: optionalTimestampSchema,
  widgetInstalledAt: optionalTimestampSchema,
  widgetLastPressedAt: optionalTimestampSchema,
  activeImpulseId: yup.string().optional(),
  currentAppState: yup.mixed<AppStateStatus>().optional(), // Define validation for AppStateStatus if needed
  expoPushToken: yup.string().optional(),
  notificationPreferences: optionalObjectOf(
    yup.array().of(notificationOptionSchema)
  ),
  issueId: yup.string().required().nullable(),
  issueName: yup.string(),
  parentIssueIds: optionalStringArray,
  hashedPhoneNumber: yup.string(),
  setbackThreshold: yup.number(),
  isTourCompleted: yup.boolean(),
  androidPermissions: optionalObjectOf(yup.boolean().required()),
  region: yup.string().nullable().optional(),
  timezone: yup.string().required(),
  scheduledNotificationIds: optionalStringArray,
  uids: requiredStringArray,
});

export type ProfileValue = yup.InferType<typeof profileSchema>;

import { AppStateStatus } from 'react-native';
import * as yup from 'yup';
import { notificationOptionSchema } from './notification';
import { optionalStringArray, requiredStringArray } from './utils/array';
import { documentReferenceSchema } from './utils/firestore';
import { optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const profileSchema = yup.object().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  activeImpulseId: yup.string().optional(),
  currentAppState: yup.mixed<AppStateStatus>().optional(), // Define validation for AppStateStatus if needed
  lastActiveAt: optionalTimestampSchema,
  expoPushToken: yup.string().optional(),
  widgetInstalledAt: optionalTimestampSchema,
  notificationPreferences: optionalObjectOf(
    yup.array().of(notificationOptionSchema)
  ),
  debriefTactic: documentReferenceSchema,
  debriefAfterMinutes: yup.number(),
  issueName: yup.string(),
  setbackThreshold: yup.number(),
  isTourCompleted: yup.boolean(),
  androidPermissions: optionalObjectOf(yup.boolean().required()),
  parentIssueIds: optionalStringArray,
  region: yup.string().nullable().optional(),
  timezone: yup.string().required(),
  invitationCode: yup.string().required(),
  scheduledNotificationIds: optionalStringArray,
  uids: requiredStringArray,
});

export type ProfileValue = yup.InferType<typeof profileSchema>;

import { AppStateStatus } from 'react-native';
import * as yup from 'yup';
import { notificationOptionSchema } from './notification';
import { imageSchema } from './utils/image';
import { optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const profileSchema = yup.object().shape({
  uid: yup.string().required(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  buttonId: yup.string().optional(),
  isAdmin: yup.boolean().optional(),
  isSuperAdmin: yup.boolean().optional(),
  activeImpulseId: yup.string().optional(),
  email: yup.string().email().notRequired(),
  currentAppState: yup.mixed<AppStateStatus>().optional(), // Define validation for AppStateStatus if needed
  showStorybook: yup.boolean().optional(),
  lastActiveAt: yup.date().optional(),
  expoPushToken: yup.string().optional(),
  releaseChannel: yup.string().oneOf(['default', 'canary']).optional(),
  widgetInstalledAt: optionalTimestampSchema,
  notificationPreferences: optionalObjectOf(
    yup.array().of(notificationOptionSchema)
  ),
  isCurrentlyTrackingMotion: yup.boolean().optional(),
  showTacticsFromSupportGroups: yup.boolean().optional(),
  androidPermissions: optionalObjectOf(yup.boolean().required()),
  parentIssueIds: yup.array().of(yup.string()).optional(),
  stepTrackingEnabled: yup.boolean().optional(),
  displayName: yup.string().optional(),
  firstName: yup.string().optional(),
  lastName: yup.string().optional(),
  nickName: yup.string().optional(),
  region: yup.string().nullable().optional(),
  timezone: yup.string().required(),
  phoneNumber: yup.string().optional(),
  avatar: imageSchema.optional().default(undefined),
  isTourCompleted: yup.boolean().optional(),
  isButtonSetupSkipped: yup.boolean().optional(),
  invitationCode: yup.string().required(),
});

export type ProfileValue = yup.InferType<typeof profileSchema>;
// programsCount: yup.number(),
// scheduledNotificationIds: optionalStringArray,

import { AppStateStatus } from 'react-native';
import * as yup from 'yup';
import { notificationOptionSchema } from './notification';
import { optionalStringArray, requiredStringArray } from './utils/array';
import { documentReferenceSchema } from './utils/firestore';
import { objectOf, optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema, timestampSchema } from './utils/timestamp';

export const profileSchema = yup.object({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  lastActiveAt: optionalTimestampSchema,
  widgetInstalledAt: optionalTimestampSchema,
  widgetLastPressedAt: optionalTimestampSchema,
  activeImpulseDoc: documentReferenceSchema,
  currentAppState: yup.mixed<AppStateStatus>().optional(), // Define validation for AppStateStatus if needed
  expoPushToken: yup.string().optional(),
  notificationPreferences: optionalObjectOf(
    yup.array().of(notificationOptionSchema)
  ),
  goal: yup.string().nullable().optional(),
  verificationCode: yup.string().required(),
  dayReviewTimeMinutes: yup.number().nullable(),
  isReadyForTour: yup.boolean(),
  isOnboardingComplete: yup.boolean(),
  parentIds: optionalStringArray,
  debriefReminderDelayMinutes: yup.number().nullable(),

  androidPermissions: optionalObjectOf(yup.boolean().required()),

  // Behavior data
  defaultBehaviorDoc: documentReferenceSchema,
  behaviorsDescription: yup.string(),

  // System message context for interacting with OpenAI
  historicalInsights: yup.array().of(yup.string().required()),
  recentSummaries: objectOf(yup.string().required()),

  activeImpulseThread: yup
    .object({
      doc: documentReferenceSchema,
      expiresAt: timestampSchema,
    })
    .optional(),
  isTourDismissed: yup.boolean(),
  tourCompletedAt: optionalTimestampSchema,
  region: yup.string().nullable().optional(),
  timezone: yup.string().required(),
  scheduledNotificationIds: optionalStringArray,
  whatsappStrategyDoc: documentReferenceSchema,
  uids: requiredStringArray,
  onboardedWithZaraAt: optionalTimestampSchema,
  enableZara: yup.boolean(),
});

export type ProfileValue = yup.InferType<typeof profileSchema>;

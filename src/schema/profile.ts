import { AppStateStatus } from 'react-native';
import * as yup from 'yup';
import { issueSchema } from './issue';
import { notificationOptionSchema } from './notification';
import { optionalStringArray, requiredStringArray } from './utils/array';
import { documentReferenceSchema } from './utils/firestore';
import { objectOf, optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const profileSchema = yup.object({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  lastActiveAt: optionalTimestampSchema,
  widgetInstalledAt: optionalTimestampSchema,
  widgetLastPressedAt: optionalTimestampSchema,
  activeImpulseDoc: documentReferenceSchema,
  currentAppState: yup.mixed<AppStateStatus>().optional(), // Define validation for AppStateStatus if needed
  addToStrategy: yup.boolean(),
  emojiID: yup.array().of(yup.string().required()),
  expoPushToken: yup.string().optional(),
  notificationPreferences: optionalObjectOf(
    yup.array().of(notificationOptionSchema)
  ),
  verificationCode: yup.string().required(),
  dayReviewTime: yup
    .object({
      hour: yup.number().required(),
      minute: yup.number().required(),
    })
    .nullable()
    .default(null),
  issuesById: optionalObjectOf(issueSchema),
  signUpIssueId: yup.string().required().nullable(),
  signUpIssueName: yup.string().nullable(),
  isReadyForTour: yup.boolean(),
  isOnboardingComplete: yup.boolean(),
  parentIds: optionalStringArray,
  sendDebriefRemindersAfterMinutes: yup.number(),
  gameplanStrategies: yup.array().of(documentReferenceSchema.required()),
  androidPermissions: optionalObjectOf(yup.boolean().required()),

  // System message context for interacting with OpenAI
  historicalInsights: yup.array().of(yup.string().required()),
  recentSummaries: objectOf(yup.string().required()),

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

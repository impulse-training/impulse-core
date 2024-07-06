import { AppStateStatus } from 'react-native';
import * as yup from 'yup';
import { AgentName } from '../agents';
import { questionDataSchema } from './log';
import { notificationOptionSchema } from './notification';
import { optionalStringArray, requiredStringArray } from './utils/array';
import { documentReferenceSchema } from './utils/firestore';
import { optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

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
  issueId: yup.string().required().nullable(),
  issueName: yup.string(),
  isReadyForTour: yup.boolean(),
  isOnboardingComplete: yup.boolean(),
  parentIssueIds: optionalStringArray,
  setbackThreshold: yup.number(),
  gameplanStrategies: yup.array().of(documentReferenceSchema.required()),
  currentAgent: yup.mixed<AgentName>().default('onboarding'),
  androidPermissions: optionalObjectOf(yup.boolean().required()),
  // This is a record of question data, that may be accessed by the LLM
  longTermMemory: optionalObjectOf(questionDataSchema),
  region: yup.string().nullable().optional(),
  timezone: yup.string().required(),
  scheduledNotificationIds: optionalStringArray,
  uids: requiredStringArray,
});

export type ProfileValue = yup.InferType<typeof profileSchema>;

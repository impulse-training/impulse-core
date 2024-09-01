import { AppStateStatus } from 'react-native';
import * as yup from 'yup';
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
  activeThreadDoc: documentReferenceSchema,
  currentAppState: yup.mixed<AppStateStatus>().optional(), // Define validation for AppStateStatus if needed
  expoPushToken: yup.string().optional(),
  notificationPreferences: optionalObjectOf(
    yup.array().of(notificationOptionSchema)
  ),
  answeredQuestionsCount: yup.number().optional(),
  // roadmap: documentReferenceSchema,
  dayReview: yup
    .mixed<'morning' | 'evening'>()
    .oneOf(['morning', 'evening'])
    .nullable()
    .defined(),
  // dailyDebriefHour: yup
  //   .object({
  //     hour: yup.number().required(),
  //     minute: yup.number().required(),
  //   })
  //   .optional()
  //   .default(undefined),

  // Can impulse add and remove and change questions and strategies?
  // impulseCanManageQuestions: yup.boolean(),
  // impulseCanManageGameplan: yup.boolean(),

  issueId: yup.string().required().nullable(),
  issueName: yup.string(),
  isReadyForTour: yup.boolean(),
  isOnboardingComplete: yup.boolean(),
  parentIssueIds: optionalStringArray,
  setbackThreshold: yup.number(),
  sendDebriefRemindersAfterMinutes: yup.number(),
  gameplanStrategies: yup.array().of(documentReferenceSchema.required()),
  androidPermissions: optionalObjectOf(yup.boolean().required()),
  impulseContext: yup.string().nullable(),
  // This is a record of question data, that may be accessed by the LLM
  longTermMemory: optionalObjectOf(questionDataSchema),
  region: yup.string().nullable().optional(),
  timezone: yup.string().required(),
  scheduledNotificationIds: optionalStringArray,
  whatsappFolderDoc: documentReferenceSchema,
  uids: requiredStringArray,
});

export type ProfileValue = yup.InferType<typeof profileSchema>;

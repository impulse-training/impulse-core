import { Timestamp } from "@google-cloud/firestore";
import { WithId } from "./types";

export type Outcome = "success" | "setback" | "indeterminate";

export const DATE_FORMAT = "yyyy-MM-dd";

export interface ImpulseTypeValue {
  uid: string;
  createdAt: Timestamp;
  name: string;
  ordinal: number;
  unit: "time" | "custom";
  customUnit?: string;
}

type RecordsWithMeta<R, M> = ({
  record: WithId<R>;
} & M)[];

export interface ImpulseValue {
  uid: string;
  createdAt: Timestamp;
  startTime: Timestamp;
  outcome: Outcome;

  debriefed?: boolean;
  debriefedAt?: Timestamp;
  timezone: string;
  checkInText?: string;

  // We store all impulse types, tactics and tags that were offered at the time, plus the ids of
  // those that were applied/selected
  tagCategories: WithId<TagCategoryValue>[];

  // We keep copies of these records with metadata
  debriefQuestions: RecordsWithMeta<DebriefQuestionValue, { response: string }>;
  impulseTypes: RecordsWithMeta<
    ImpulseTypeValue,
    { applied: boolean; usage?: number }
  >;
  tactics: RecordsWithMeta<TacticValue, { applied: boolean }>;
  tags: RecordsWithMeta<TagValue, { applied: boolean; value?: number }>;
}

export interface PressValue {
  uid: string;
  createdAt: Timestamp;
  impulseId: string;
  buttonId: string;
  pressedAt: Timestamp;
}

export interface QuestValue {
  uid: string;
  createdAt: Timestamp;
  name: string;
  ordinal: number;
  description: string;
  startedAt?: Timestamp;
  completedAt?: Timestamp;
  impulseDatesById: { [key: string]: string };
  eligibleImpulseCount?: number;
  eligibleDatesCount?: number;

  requirement: {
    impulseCount?: number;
    dayCount?: number;
    sequentialDayCount?: number;
  };
  impulseRequirements: {
    tagId?: string;
    outcome?: ImpulseValue["outcome"];
    tacticId?: string;
  };
}

export interface TagCategoryValue {
  uid: string;
  createdAt: Timestamp;
  name: string;
  prompt: string;
  ordinal: number;
  showCheckInLinkInGameplan?: boolean;
}

export interface DebriefQuestionValue {
  uid: string;
  createdAt: Timestamp;
  prompt: string;
  ordinal: number;
}

// We don't add a trailing "Value" to the interface name as this isn't stored in a collection, only
// as JSON for the dimension
export interface TagValue {
  uid: string;
  createdAt: Timestamp;
  defaultSelected?: boolean;
  categoryId: string;
  categoryName?: string; // This is written into impulse documents for easy reading
  ordinal: number;
  name: string;
  subtext?: string;
  emoji: string;
}

export interface ButtonValue {
  uid: string;
  createdAt: Timestamp;
  buttonId: string;
  source: "manual"; // The source of the sync, currently only manual
}

export interface AffirmationValue {
  uid: string;
  createdAt: Timestamp;
  ordinal: number;
  heading: string;
  text: string;
}

export interface ProfileValue {
  uid: string;
  createdAt: Timestamp;
  buttonId?: string;
  isAdmin?: boolean;
  activeImpulseId?: string;
  displayName: string;
  currentAppState?: string;
  lastActiveAt?: Timestamp;
  expoPushToken?: string;
  releaseChannel?: "default" | "canary";
  debriefAfterSeconds: number;
  isTourCompleted?: boolean;
  region: string | null;
  timezone: string;
  checkInEntries: CheckInTagEntry[];
  impulseNotification: {
    title: string;
    body: string;
  };
}

export interface FeedbackValue {
  uid: string;
  createdAt: Timestamp;
  recordingPath?: string;
  suggestion: string;
  isPublic: boolean;
}

export type CheckInTagEntry = {
  from: { id: string; name: string; emoji: string };
  to: { id: string; name: string; emoji: string };
  value: number | null;
};
export interface CheckInValue {
  uid: string;
  impulseId?: string;
  createdAt: Timestamp;
  type: "checkIn";
  startTime: Timestamp;
  tags: ImpulseValue["tags"];
  checkInText?: string;
}

export interface ImageValue {
  createdAt: Timestamp;
  localFilePath: string;
  filePath: string;
}

interface TacticBaseValue {
  uid: string;
  heading: string;
  createdAt: Timestamp;
  description: string;
  ordinal: number;
  tagIds?: [];
  featuredCategories?: string[];
  featuredTacticId?: string; // The source (featured tactic)
  impulseTypeIds?: string[];
  impulseTypeVisibility: "_all" | "limited";
}

export type AudioTacticValue = TacticBaseValue & {
  type: "audio";
} & StorageFile;

export type QuestionTacticValue = TacticBaseValue & {
  type: "question";
};

export type ImageTacticValue = TacticBaseValue & {
  type: "image";
} & StorageFile;

export type TextTacticValue = TacticBaseValue & {
  type: "text";
  text: string;
};

export type TacticValue =
  | TextTacticValue
  | QuestionTacticValue
  | AudioTacticValue
  | ImageTacticValue;

export type FeaturedTacticValue = TacticValue & {
  featuredCategories: string[];
};

interface StorageFile {
  localFilePath: string;
  remoteFilePath: string;
  localDeviceId: string;
  meta: Record<string, unknown>;
}

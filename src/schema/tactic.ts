import { WithId } from '../types/types';
import { FakeTimestamp } from '../utils/FakeTimestamp';
import { Recording } from './recording';
import { TagValue } from './tag';

export type CheckInTagEntry = {
  from: { id: string; name: string; emoji: string };
  to: { id: string; name: string; emoji: string };
  value: number | null;
};

export interface ImageValue {
  createdAt: FakeTimestamp;
  localFilePath: string;
  filePath: string;
}

// interface StorageFile {
//   localFilePath: string;
//   remoteFilePath: string;
//   localDeviceId: string;
//   meta: Record<string, unknown>;
// }

interface TacticValueBase<K> {
  type?: K;
  uid?: string;
  originalId?: string;
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
  ordinal: number;
  title: string;
  description?: string;
  image?: { uri: string; storagePath?: string };
  language?: string;
  href?: string;

  // Deprecated: remove
  templateFor?: Array<'impulse' | 'success' | 'setback'>;
  suggestedFor?: Array<'impulse' | 'success' | 'setback'>;

  isTemplate?: boolean;

  isBooster?: boolean;
  tagsSummary?: Record<string, string>;
  categoryIds?: Array<string>;
  isShared?: boolean;

  // In impulse moments, do we want to show a field for collecting a response? This is the case for
  // questions, like "How are you feeling right now?"
  showResponseBox?: boolean;

  // MD5 hashes that represent the state of reminders synced with the phone
  deviceTimeRemindersDigest?: string;
  deviceLocationRemindersDigest?: string;

  dataDigest?: string;
  checkInEntries?: CheckInTagEntry[];
}

export type PhoneTacticValue = TacticValueBase<'phone'> & {
  supportGroupId: string;
  trigger: 'automatic' | 'manual';
};

export type AudioTactic = TacticValueBase<'audio'> & {
  metadata: Recording;
};

export type TimerTactic = TacticValueBase<'timer'> & {
  metadata: {
    timerMinutes: number;
  };
};

export type SpotifyEpisodeTactic = TacticValueBase<'link'> & {
  metadata: {
    episodeId: string;
    durationMs: number;
    durationFormatted: string;
  };
};

export type SpotifyTrackTactic = TacticValueBase<'link'> & {
  metadata: {
    episodeId: string;
    durationMs: number;
  };
};

export type FeelingsTactic = TacticValueBase<'feelings'> & {
  tags: Array<WithId<TagValue>>;
};
type QuestionTactic = TacticValueBase<'question'>;
type TaskTactic = TacticValueBase<'task'>;

export type TacticValue =
  | PhoneTacticValue
  | AudioTactic
  | SpotifyEpisodeTactic
  | SpotifyTrackTactic
  | QuestionTactic
  | FeelingsTactic
  | TaskTactic
  | TimerTactic;

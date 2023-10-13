import { FakeTimestamp } from '../utils/FakeTimestamp';
import { Recording } from './recording';

export interface ImageValue {
  createdAt: FakeTimestamp;
  localFilePath: string;
  filePath: string;
}

export interface TacticValueBase<K> {
  type?: K;
  uid?: string;
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
  ordinal: number;
  title: string;
  description?: string;
  image?: { uri: string; storagePath?: string };
  isTemplate?: boolean;
  language?: string;
  href?: string;
  categoryIds?: Array<string>;
  isShared?: boolean;
}

export type TimeSliderTactic = TacticValueBase<'slider'> & {
  unit: 'time';
  transformFunction: 'logarithmic';
};

export type EmojiSliderTactic = TacticValueBase<'slider'> & {
  unit: 'emojis';
  transformFunction: 'linear';
  lowEmoji: string;
  highEmoji: string;
};

export type CustomSliderTactic = TacticValueBase<'slider'> & {
  unit: 'custom';
  transformFunction: 'linear';
  customUnit: string;
  maximum: number;
};

export type SliderTactic =
  | TimeSliderTactic
  | EmojiSliderTactic
  | CustomSliderTactic;

export type FolderTactic = TacticValueBase<'folder'> & {
  tacticIds: Array<string>;
  tacticsById?: Record<string, TacticValue>;
};

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

export type OptionsTactic = TacticValueBase<'options'> & {
  tacticIds: Array<string>;
  tacticsById: Record<string, TacticValue>;
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

type TaskTactic = TacticValueBase<'task'>;

export type TacticValue =
  | PhoneTacticValue
  | AudioTactic
  | SpotifyEpisodeTactic
  | SpotifyTrackTactic
  | TaskTactic
  | TimerTactic
  | FolderTactic
  | SliderTactic
  | OptionsTactic;

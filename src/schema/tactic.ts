import { FakeTimestamp } from '../utils/FakeTimestamp';
import { Image } from '../utils/image';
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
  image?: Image;
  backgroundColor?: string;
  isTemplate?: boolean;
  language?: string;
  href?: string;
  categoryIds?: Array<string>;
  isShared?: boolean;
}

// Deprecated --------------------------------------------------------------------------------------
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
// Deprecated --------------------------------------------------------------------------------------

export type SlidersTactic = TacticValueBase<'sliders'> & {
  rows: Array<{
    key: string;
    label: string;
    lowEmoji: string;
    highEmoji: string;
  }>;
};

export type FolderTactic = TacticValueBase<'folder'> & {
  tacticIds: Array<string>;
  tacticsById?: Record<string, TacticValue>;
};

export type PhoneTacticValue = TacticValueBase<'phone'> & {
  supportGroupId: string;
  trigger: 'automatic' | 'manual';
};

export type AudioTactic = TacticValueBase<'audio'> & {
  // deprecated:
  metadata: Recording;

  recording?: Recording;
};

export type VideoTactic = TacticValueBase<'video'> & {
  video: {
    url?: string;
    storagePath?: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    duration: number;
  };
};

export type TimerTactic = TacticValueBase<'timer'> & {
  metadata: {
    // Deprecated
    timerMinutes?: number;

    timerSeconds: number;
  };
};

export type BreatheTactic = TacticValueBase<'breathe'> & {
  metadata: {
    inFor: number;
    holdFor: number;
    outFor: number;
    repeat: number;
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
  | VideoTactic
  | SpotifyEpisodeTactic
  | SpotifyTrackTactic
  | TaskTactic
  | TimerTactic
  | FolderTactic
  | SliderTactic
  | SlidersTactic
  | OptionsTactic
  | BreatheTactic;

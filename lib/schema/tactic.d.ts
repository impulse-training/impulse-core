import { WithId } from '../types/types';
import { FakeTimestamp } from '../utils/FakeTimestamp';
import { Recording } from './recording';
import { TagValue } from './tag';
export type CheckInTagEntry = {
    from: {
        id: string;
        name: string;
        emoji: string;
    };
    to: {
        id: string;
        name: string;
        emoji: string;
    };
    value: number | null;
};
export interface ImageValue {
    createdAt: FakeTimestamp;
    localFilePath: string;
    filePath: string;
}
interface TacticValueBase<K> {
    type?: K;
    uid: string;
    originalId?: string;
    createdAt: FakeTimestamp;
    updatedAt: FakeTimestamp;
    ordinal: number;
    delaySeconds?: number;
    title: string;
    subtitle?: string;
    image?: {
        uri: string;
    };
    language?: string;
    href?: string;
    isSharingEnabled: boolean;
    isTemplate?: boolean;
    isBooster?: boolean;
    tagsSummary?: Record<string, string>;
    featuredCategory?: string;
    showResponseBox?: boolean;
    deviceTimeRemindersDigest?: string;
    deviceLocationRemindersDigest?: string;
    dataDigest?: string;
    patternIds: Array<string>;
    allPatterns?: boolean;
    checkInEntries?: CheckInTagEntry[];
    remindersSummary?: Array<string>;
}
export type AudioTactic = TacticValueBase<'audio'> & {
    metadata: Recording;
};
export type TimerTactic = TacticValueBase<'timer'> & {
    metadata: {
        timerSeconds?: number;
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
type LinkTactic = TacticValueBase<'link'>;
type QuestionTactic = TacticValueBase<'question'>;
type TaskTactic = TacticValueBase<'task'>;
export type TacticValue = AudioTactic | SpotifyEpisodeTactic | SpotifyTrackTactic | LinkTactic | QuestionTactic | FeelingsTactic | TaskTactic;
export {};

import * as yup from 'yup';
export declare const folderTacticSchema: yup.ObjectSchema<{
    type: "folder";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    subtitle: yup.Maybe<string | undefined>;
    description: string | null | undefined;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor: string;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isAvailableForRecommendation: boolean | null | undefined;
    nextId: string | undefined;
    tacticIds: string[];
    currentTacticIndex: number;
    tacticsById: {};
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    subtitle: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    timerSeconds: undefined;
    isAvailableForRecommendation: undefined;
    nextId: undefined;
    tacticIds: "";
    currentTacticIndex: undefined;
    tacticsById: {};
}, "">;
export type FolderTactic = yup.InferType<typeof folderTacticSchema>;
export declare const stepsTacticSchema: yup.ObjectSchema<{
    type: "steps";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    subtitle: yup.Maybe<string | undefined>;
    description: string | null | undefined;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor: string;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isAvailableForRecommendation: boolean | null | undefined;
    steps: number;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    subtitle: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    timerSeconds: undefined;
    isAvailableForRecommendation: undefined;
    steps: undefined;
}, "">;
export type StepsTactic = yup.InferType<typeof stepsTacticSchema>;
export declare const emotionsTacticSchema: yup.ObjectSchema<{
    type: "emotions";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    subtitle: yup.Maybe<string | undefined>;
    description: string | null | undefined;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor: string;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isAvailableForRecommendation: boolean | null | undefined;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    subtitle: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    timerSeconds: undefined;
    isAvailableForRecommendation: undefined;
}, "">;
export type EmotionsTactic = yup.InferType<typeof emotionsTacticSchema>;
export declare const audioTacticSchema: yup.ObjectSchema<{
    type: "audio";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    subtitle: yup.Maybe<string | undefined>;
    description: string | null | undefined;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor: string;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isAvailableForRecommendation: boolean | null | undefined;
    metadata: {
        waveform?: string | null | undefined;
        localFilePath: string;
        remoteFilePath: string;
    };
    recording: {
        waveform?: string | null | undefined;
        localFilePath: string;
        remoteFilePath: string;
    } | null;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    subtitle: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    timerSeconds: undefined;
    isAvailableForRecommendation: undefined;
    metadata: {
        localFilePath: undefined;
        remoteFilePath: undefined;
        waveform: undefined;
    };
    recording: {
        localFilePath: undefined;
        remoteFilePath: undefined;
        waveform: undefined;
    };
}, "">;
export type AudioTactic = yup.InferType<typeof audioTacticSchema>;
export declare const videoTacticSchema: yup.ObjectSchema<{
    type: "video";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    subtitle: yup.Maybe<string | undefined>;
    description: string | null | undefined;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor: string;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isAvailableForRecommendation: boolean | null | undefined;
    video: {
        storagePath?: string | null | undefined;
        url?: string | null | undefined;
        title: string;
        description: string;
        thumbnailUrl: string;
        duration: number;
    };
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    subtitle: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    timerSeconds: undefined;
    isAvailableForRecommendation: undefined;
    video: {
        url: undefined;
        storagePath: undefined;
        title: undefined;
        description: undefined;
        thumbnailUrl: undefined;
        duration: undefined;
    };
}, "">;
export type VideoTactic = yup.InferType<typeof videoTacticSchema>;
export declare const measureSliderTacticSchema: yup.ObjectSchema<{
    type: "measure-slider";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    subtitle: yup.Maybe<string | undefined>;
    description: string | null | undefined;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor: string;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isAvailableForRecommendation: boolean | null | undefined;
    lowEmoji: string;
    highEmoji: string;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    subtitle: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    timerSeconds: undefined;
    isAvailableForRecommendation: undefined;
    lowEmoji: undefined;
    highEmoji: undefined;
}, "">;
export type MeasureSliderTactic = yup.InferType<typeof measureSliderTacticSchema>;
export declare const measureTimeTacticSchema: yup.ObjectSchema<{
    type: "measure-time";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    subtitle: yup.Maybe<string | undefined>;
    description: string | null | undefined;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor: string;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isAvailableForRecommendation: boolean | null | undefined;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    subtitle: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    timerSeconds: undefined;
    isAvailableForRecommendation: undefined;
}, "">;
export type MeasureTimeTactic = yup.InferType<typeof measureTimeTacticSchema>;
export declare const measureCounterTacticSchema: yup.ObjectSchema<{
    type: "measure-counter";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    subtitle: yup.Maybe<string | undefined>;
    description: string | null | undefined;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor: string;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isAvailableForRecommendation: boolean | null | undefined;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    subtitle: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    timerSeconds: undefined;
    isAvailableForRecommendation: undefined;
}, "">;
export type MeasureCounterTactic = yup.InferType<typeof measureCounterTacticSchema>;
export type MeasureTactic = MeasureSliderTactic | MeasureTimeTactic | MeasureCounterTactic;
export declare const phoneTacticSchema: yup.ObjectSchema<{
    type: "phone";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    subtitle: yup.Maybe<string | undefined>;
    description: string | null | undefined;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor: string;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isAvailableForRecommendation: boolean | null | undefined;
    supportGroupId: string;
    trigger: {};
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    subtitle: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    timerSeconds: undefined;
    isAvailableForRecommendation: undefined;
    supportGroupId: undefined;
    trigger: undefined;
}, "">;
export type PhoneTacticValue = yup.InferType<typeof phoneTacticSchema>;
export declare const breatheTacticSchema: yup.ObjectSchema<{
    type: "breathe";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    subtitle: yup.Maybe<string | undefined>;
    description: string | null | undefined;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor: string;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isAvailableForRecommendation: boolean | null | undefined;
    inFor: number;
    holdFor: number;
    outFor: number;
    repeat: number;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    subtitle: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    timerSeconds: undefined;
    isAvailableForRecommendation: undefined;
    inFor: undefined;
    holdFor: undefined;
    outFor: undefined;
    repeat: undefined;
}, "">;
export type BreatheTactic = yup.InferType<typeof breatheTacticSchema>;
export declare const urgeSurfingTacticSchema: yup.ObjectSchema<{
    type: "urge-surfing";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    subtitle: yup.Maybe<string | undefined>;
    description: string | null | undefined;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor: string;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isAvailableForRecommendation: boolean | null | undefined;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    subtitle: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    timerSeconds: undefined;
    isAvailableForRecommendation: undefined;
}, "">;
export type UrgeSurfingTactic = yup.InferType<typeof urgeSurfingTacticSchema>;
export declare const taskTacticSchema: yup.ObjectSchema<{
    type: "task";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    subtitle: yup.Maybe<string | undefined>;
    description: string | null | undefined;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor: string;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isAvailableForRecommendation: boolean | null | undefined;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    subtitle: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    timerSeconds: undefined;
    isAvailableForRecommendation: undefined;
}, "">;
export type TaskTactic = yup.InferType<typeof taskTacticSchema>;
export declare const questionTacticSchema: yup.ObjectSchema<{
    type: "question";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    subtitle: yup.Maybe<string | undefined>;
    description: string | null | undefined;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor: string;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isAvailableForRecommendation: boolean | null | undefined;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    subtitle: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    timerSeconds: undefined;
    isAvailableForRecommendation: undefined;
}, "">;
export type QuestionTactic = yup.InferType<typeof questionTacticSchema>;
export type TacticValue = PhoneTacticValue | AudioTactic | UrgeSurfingTactic | VideoTactic | QuestionTactic | TaskTactic | MeasureTactic | FolderTactic | BreatheTactic | StepsTactic | EmotionsTactic;
export declare const tacticSchemas: Record<TacticValue['type'], yup.ObjectSchema<TacticValue>>;
export declare const tacticSchema: yup.Lazy<{
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    subtitle?: yup.Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    isTemplate?: boolean | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    nextId?: string | undefined;
    type: "folder";
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    backgroundColor: string;
    tacticIds: string[];
    currentTacticIndex: number;
    tacticsById: {};
} | {
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    subtitle?: yup.Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    isTemplate?: boolean | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    type: "steps";
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    backgroundColor: string;
    steps: number;
} | {
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    subtitle?: yup.Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    isTemplate?: boolean | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    type: "emotions";
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    backgroundColor: string;
} | {
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    subtitle?: yup.Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    isTemplate?: boolean | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    type: "audio";
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    backgroundColor: string;
    metadata: {
        waveform?: string | null | undefined;
        localFilePath: string;
        remoteFilePath: string;
    };
    recording: {
        waveform?: string | null | undefined;
        localFilePath: string;
        remoteFilePath: string;
    } | null;
} | {
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    subtitle?: yup.Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    isTemplate?: boolean | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    type: "video";
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    backgroundColor: string;
    video: {
        storagePath?: string | null | undefined;
        url?: string | null | undefined;
        title: string;
        description: string;
        thumbnailUrl: string;
        duration: number;
    };
} | {
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    subtitle?: yup.Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    isTemplate?: boolean | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    type: "measure-slider";
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    backgroundColor: string;
    lowEmoji: string;
    highEmoji: string;
} | {
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    subtitle?: yup.Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    isTemplate?: boolean | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    type: "measure-time";
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    backgroundColor: string;
} | {
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    subtitle?: yup.Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    isTemplate?: boolean | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    type: "measure-counter";
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    backgroundColor: string;
} | {
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    subtitle?: yup.Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    isTemplate?: boolean | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    type: "phone";
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    backgroundColor: string;
    supportGroupId: string;
    trigger: {};
} | {
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    subtitle?: yup.Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    isTemplate?: boolean | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    type: "breathe";
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    backgroundColor: string;
    inFor: number;
    holdFor: number;
    outFor: number;
    repeat: number;
} | {
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    subtitle?: yup.Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    isTemplate?: boolean | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    type: "urge-surfing";
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    backgroundColor: string;
} | {
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    subtitle?: yup.Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    isTemplate?: boolean | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    type: "task";
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    backgroundColor: string;
} | {
    uid?: string | null | undefined;
    ordinal?: number | null | undefined;
    subtitle?: yup.Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    isTemplate?: boolean | null | undefined;
    language?: string | null | undefined;
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    type: "question";
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    backgroundColor: string;
}, yup.AnyObject, any>;
export declare const tacticColors: string[];
export declare const isStepsTactic: ({ type }: TacticValue) => boolean;
export declare const isEmotionsTactic: ({ type }: TacticValue) => boolean;
export declare const isAudioTactic: ({ type }: TacticValue) => boolean;
export declare const isVideoTactic: ({ type }: TacticValue) => boolean;
export declare const isMeasureSliderTactic: ({ type }: TacticValue) => boolean;
export declare const isMeasureTimeTactic: ({ type }: TacticValue) => boolean;
export declare const isFolderTactic: ({ type }: TacticValue) => boolean;
export declare const isMeasureCounterTactic: ({ type }: TacticValue) => boolean;
export declare const isPhoneTacticValue: ({ type }: TacticValue) => boolean;
export declare const isBreatheTactic: ({ type }: TacticValue) => boolean;
export declare const isTaskTactic: ({ type }: TacticValue) => boolean;
export declare const isQuestionTactic: ({ type }: TacticValue) => boolean;
export type WithTacticsById<T> = Omit<T, 'tacticsById'> & {
    tacticsById: Record<string, TacticValue>;
};

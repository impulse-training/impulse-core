import * as yup from 'yup';
declare const stepsTacticSchema: yup.ObjectSchema<{
    type: "steps";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    isSuggested: boolean | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
    };
    title: string;
    description: string | null | undefined;
    image: {
        localFilePath: string;
        storagePath: string;
    } | null | undefined;
    backgroundColor: string | null | undefined;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    isAvailableForRecommendation: boolean | null | undefined;
    steps: number;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    isSuggested: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    title: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    isAvailableForRecommendation: undefined;
    steps: undefined;
}, "">;
export type StepsTactic = yup.InferType<typeof stepsTacticSchema>;
declare const audioTacticSchema: yup.ObjectSchema<{
    type: "audio";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    isSuggested: boolean | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
    };
    title: string;
    description: string | null | undefined;
    image: {
        localFilePath: string;
        storagePath: string;
    } | null | undefined;
    backgroundColor: string | null | undefined;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
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
    isSuggested: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    title: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
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
declare const videoTacticSchema: yup.ObjectSchema<{
    type: "video";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    isSuggested: boolean | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
    };
    title: string;
    description: string | null | undefined;
    image: {
        localFilePath: string;
        storagePath: string;
    } | null | undefined;
    backgroundColor: string | null | undefined;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
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
    isSuggested: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    title: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
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
declare const measureSlidersTacticSchema: yup.ObjectSchema<{
    type: "measure-sliders";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    isSuggested: boolean | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
    };
    title: string;
    description: string | null | undefined;
    image: {
        localFilePath: string;
        storagePath: string;
    } | null | undefined;
    backgroundColor: string | null | undefined;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    isAvailableForRecommendation: boolean | null | undefined;
    rows: {
        value?: number | null | undefined;
        key: string;
        label: string;
        lowEmoji: string;
        highEmoji: string;
    }[];
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    isSuggested: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    title: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    isAvailableForRecommendation: undefined;
    rows: "";
}, "">;
export type MeasureSlidersTactic = yup.InferType<typeof measureSlidersTacticSchema>;
declare const measureTimeTacticSchema: yup.ObjectSchema<{
    type: "measure-time";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    isSuggested: boolean | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
    };
    title: string;
    description: string | null | undefined;
    image: {
        localFilePath: string;
        storagePath: string;
    } | null | undefined;
    backgroundColor: string | null | undefined;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    isAvailableForRecommendation: boolean | null | undefined;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    isSuggested: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    title: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    isAvailableForRecommendation: undefined;
}, "">;
export type MeasureTimeTactic = yup.InferType<typeof measureTimeTacticSchema>;
declare const measureCounterTacticSchema: yup.ObjectSchema<{
    type: "measure-counter";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    isSuggested: boolean | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
    };
    title: string;
    description: string | null | undefined;
    image: {
        localFilePath: string;
        storagePath: string;
    } | null | undefined;
    backgroundColor: string | null | undefined;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    isAvailableForRecommendation: boolean | null | undefined;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    isSuggested: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    title: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    isAvailableForRecommendation: undefined;
}, "">;
export type MeasureCounterTactic = yup.InferType<typeof measureCounterTacticSchema>;
export type MeasureTactic = MeasureSlidersTactic | MeasureTimeTactic | MeasureCounterTactic;
declare const folderTacticSchema: yup.ObjectSchema<{
    type: "folder";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    isSuggested: boolean | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
    };
    title: string;
    description: string | null | undefined;
    image: {
        localFilePath: string;
        storagePath: string;
    } | null | undefined;
    backgroundColor: string | null | undefined;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    isAvailableForRecommendation: boolean | null | undefined;
    tacticIds: (string | undefined)[];
    tacticsById: {} | null;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    isSuggested: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    title: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    isAvailableForRecommendation: undefined;
    tacticIds: "";
    tacticsById: {};
}, "">;
export type FolderTactic = yup.InferType<typeof folderTacticSchema>;
declare const phoneTacticSchema: yup.ObjectSchema<{
    type: "phone";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    isSuggested: boolean | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
    };
    title: string;
    description: string | null | undefined;
    image: {
        localFilePath: string;
        storagePath: string;
    } | null | undefined;
    backgroundColor: string | null | undefined;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    isAvailableForRecommendation: boolean | null | undefined;
    supportGroupId: string;
    trigger: {};
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    isSuggested: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    title: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    isAvailableForRecommendation: undefined;
    supportGroupId: undefined;
    trigger: undefined;
}, "">;
export type PhoneTacticValue = yup.InferType<typeof phoneTacticSchema>;
declare const timerTacticSchema: yup.ObjectSchema<{
    type: "timer";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    isSuggested: boolean | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
    };
    title: string;
    description: string | null | undefined;
    image: {
        localFilePath: string;
        storagePath: string;
    } | null | undefined;
    backgroundColor: string | null | undefined;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    isAvailableForRecommendation: boolean | null | undefined;
    timerSeconds: number;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    isSuggested: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    title: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    isAvailableForRecommendation: undefined;
    timerSeconds: undefined;
}, "">;
export type TimerTactic = yup.InferType<typeof timerTacticSchema>;
declare const breatheTacticSchema: yup.ObjectSchema<{
    type: "breathe";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    isSuggested: boolean | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
    };
    title: string;
    description: string | null | undefined;
    image: {
        localFilePath: string;
        storagePath: string;
    } | null | undefined;
    backgroundColor: string | null | undefined;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    isAvailableForRecommendation: boolean | null | undefined;
    inFor: number;
    holdFor: number;
    outFor: number;
    repeat: number;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    isSuggested: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    title: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    isAvailableForRecommendation: undefined;
    inFor: undefined;
    holdFor: undefined;
    outFor: undefined;
    repeat: undefined;
}, "">;
export type BreatheTactic = yup.InferType<typeof breatheTacticSchema>;
declare const optionsTacticSchema: yup.ObjectSchema<{
    type: "options";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    isSuggested: boolean | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
    };
    title: string;
    description: string | null | undefined;
    image: {
        localFilePath: string;
        storagePath: string;
    } | null | undefined;
    backgroundColor: string | null | undefined;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    isAvailableForRecommendation: boolean | null | undefined;
    tacticIds: (string | undefined)[];
    tacticsById: {};
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    isSuggested: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    title: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    isAvailableForRecommendation: undefined;
    tacticIds: "";
    tacticsById: {};
}, "">;
export type OptionsTactic = yup.InferType<typeof optionsTacticSchema>;
declare const taskTacticSchema: yup.ObjectSchema<{
    type: "task";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    isSuggested: boolean | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
    };
    title: string;
    description: string | null | undefined;
    image: {
        localFilePath: string;
        storagePath: string;
    } | null | undefined;
    backgroundColor: string | null | undefined;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    isAvailableForRecommendation: boolean | null | undefined;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    isSuggested: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    title: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    isAvailableForRecommendation: undefined;
}, "">;
export type TaskTactic = yup.InferType<typeof taskTacticSchema>;
declare const questionTacticSchema: yup.ObjectSchema<{
    type: "question";
    uid: string | null | undefined;
    ordinal: number | null | undefined;
    isSuggested: boolean | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
    };
    title: string;
    description: string | null | undefined;
    image: {
        localFilePath: string;
        storagePath: string;
    } | null | undefined;
    backgroundColor: string | null | undefined;
    isTemplate: boolean | null | undefined;
    language: string | null | undefined;
    href: string | null | undefined;
    categoryIds: (string | undefined)[] | null | undefined;
    isShared: boolean | null | undefined;
    isResponseRequired: boolean | null | undefined;
    isAvailableForRecommendation: boolean | null | undefined;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    ordinal: undefined;
    isSuggested: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    title: undefined;
    description: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
    };
    backgroundColor: undefined;
    isTemplate: undefined;
    language: undefined;
    href: undefined;
    categoryIds: "";
    isShared: undefined;
    isResponseRequired: undefined;
    isAvailableForRecommendation: undefined;
}, "">;
export type QuestionTactic = yup.InferType<typeof questionTacticSchema>;
export type TacticValue = PhoneTacticValue | AudioTactic | VideoTactic | QuestionTactic | TaskTactic | TimerTactic | FolderTactic | MeasureTactic | OptionsTactic | BreatheTactic | StepsTactic;
declare const tacticSchemas: Record<TacticValue['type'], yup.ObjectSchema<TacticValue>>;
export { audioTacticSchema, breatheTacticSchema, folderTacticSchema, measureCounterTacticSchema, measureSlidersTacticSchema, measureTimeTacticSchema, optionsTacticSchema, phoneTacticSchema, questionTacticSchema, stepsTacticSchema, tacticSchemas, taskTacticSchema, timerTacticSchema, videoTacticSchema, };

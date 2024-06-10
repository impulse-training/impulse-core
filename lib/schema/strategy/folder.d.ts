import * as yup from 'yup';
export declare const folderSchema: yup.ObjectSchema<{
    recommendedForIssueIds: string[] | undefined;
    recommendedForIssueOrdinals: {
        [x: string]: number;
    } | null | undefined;
    ordinal: number;
    title: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    type: "folder";
    slug: string | undefined;
    creatorProfileId: string | undefined;
    invitationCode: string;
    invitationUrl: string;
    tacticsById: {
        [x: string]: {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            commentCount?: number | undefined;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            options?: ({
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                label?: string | undefined;
                text: string;
                type: "question-multiple-choice";
                color: string;
                textColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                label?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                text: string;
                type: "question-time";
                color: string;
                textColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                label?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                text: string;
                type: "question-counter";
                color: string;
                textColor: string;
            })[] | undefined;
            ordinal: number;
            title: string;
            type: import("..").QuestionKeyType;
        } | {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            commentCount?: number | undefined;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            title: string;
            type: import("..").QuestionKeyType;
            options: string[];
        } | {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            commentCount?: number | undefined;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            options?: ({
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                label?: string | undefined;
                text: string;
                type: "question-multiple-choice";
                color: string;
                textColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                label?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                text: string;
                type: "question-time";
                color: string;
                textColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                label?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                text: string;
                type: "question-counter";
                color: string;
                textColor: string;
            })[] | undefined;
            ordinal: number;
            title: string;
            type: import("..").QuestionKeyType;
        } | {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            commentCount?: number | undefined;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            recording: {
                localFilePath?: string | undefined;
                waveform?: string | null | undefined;
                remoteFilePath: string;
            };
            ordinal: number;
            title: string;
            type: "audio";
        } | {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            commentCount?: number | undefined;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            repeat?: yup.Maybe<number | undefined>;
            ordinal: number;
            title: string;
            type: "breathe";
            inFor: number;
            holdFor: number;
            outFor: number;
        } | {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            commentCount?: number | undefined;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            title: string;
            type: "contacts";
            contactIds: string[];
        } | {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            commentCount?: number | undefined;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            title: string;
            type: "steps";
            steps: number;
        } | {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            commentCount?: number | undefined;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            title: string;
            type: "task";
        } | {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            commentCount?: number | undefined;
            description?: string | null | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            title: string;
            type: "video";
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
                title: string;
                description: string;
                thumbnailUrl: string;
                duration: number;
            };
        };
    };
    next3Tactics: ({
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        profileId?: string | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        pastTenseTitle?: string | undefined;
        commentCount?: number | undefined;
        description?: string | null | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            storagePath?: yup.Maybe<string | undefined>;
            uri?: yup.Maybe<string | undefined>;
        } | null | undefined;
        backgroundColor?: string | undefined;
        setbackThreshold?: number | null | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        options?: ({
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            label?: string | undefined;
            text: string;
            type: "question-multiple-choice";
            color: string;
            textColor: string;
        } | {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            greaterThan?: number | undefined;
            lessThanOrEqualTo?: number | undefined;
            text: string;
            type: "question-time";
            color: string;
            textColor: string;
        } | {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            greaterThan?: number | undefined;
            lessThanOrEqualTo?: number | undefined;
            text: string;
            type: "question-counter";
            color: string;
            textColor: string;
        })[] | undefined;
        ordinal: number;
        title: string;
        type: import("..").QuestionKeyType;
    } | {
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        profileId?: string | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        pastTenseTitle?: string | undefined;
        commentCount?: number | undefined;
        description?: string | null | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            storagePath?: yup.Maybe<string | undefined>;
            uri?: yup.Maybe<string | undefined>;
        } | null | undefined;
        backgroundColor?: string | undefined;
        setbackThreshold?: number | null | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        ordinal: number;
        title: string;
        type: import("..").QuestionKeyType;
        options: string[];
    } | {
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        profileId?: string | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        pastTenseTitle?: string | undefined;
        commentCount?: number | undefined;
        description?: string | null | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            storagePath?: yup.Maybe<string | undefined>;
            uri?: yup.Maybe<string | undefined>;
        } | null | undefined;
        backgroundColor?: string | undefined;
        setbackThreshold?: number | null | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        lowEmoji?: yup.Maybe<string | undefined>;
        highEmoji?: yup.Maybe<string | undefined>;
        options?: ({
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            label?: string | undefined;
            text: string;
            type: "question-multiple-choice";
            color: string;
            textColor: string;
        } | {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            greaterThan?: number | undefined;
            lessThanOrEqualTo?: number | undefined;
            text: string;
            type: "question-time";
            color: string;
            textColor: string;
        } | {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            greaterThan?: number | undefined;
            lessThanOrEqualTo?: number | undefined;
            text: string;
            type: "question-counter";
            color: string;
            textColor: string;
        })[] | undefined;
        ordinal: number;
        title: string;
        type: import("..").QuestionKeyType;
    } | {
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        profileId?: string | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        pastTenseTitle?: string | undefined;
        commentCount?: number | undefined;
        description?: string | null | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            storagePath?: yup.Maybe<string | undefined>;
            uri?: yup.Maybe<string | undefined>;
        } | null | undefined;
        backgroundColor?: string | undefined;
        setbackThreshold?: number | null | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        recording: {
            localFilePath?: string | undefined;
            waveform?: string | null | undefined;
            remoteFilePath: string;
        };
        ordinal: number;
        title: string;
        type: "audio";
    } | {
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        profileId?: string | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        pastTenseTitle?: string | undefined;
        commentCount?: number | undefined;
        description?: string | null | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            storagePath?: yup.Maybe<string | undefined>;
            uri?: yup.Maybe<string | undefined>;
        } | null | undefined;
        backgroundColor?: string | undefined;
        setbackThreshold?: number | null | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        repeat?: yup.Maybe<number | undefined>;
        ordinal: number;
        title: string;
        type: "breathe";
        inFor: number;
        holdFor: number;
        outFor: number;
    } | {
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        profileId?: string | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        pastTenseTitle?: string | undefined;
        commentCount?: number | undefined;
        description?: string | null | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            storagePath?: yup.Maybe<string | undefined>;
            uri?: yup.Maybe<string | undefined>;
        } | null | undefined;
        backgroundColor?: string | undefined;
        setbackThreshold?: number | null | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        ordinal: number;
        title: string;
        type: "contacts";
        contactIds: string[];
    } | {
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        profileId?: string | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        pastTenseTitle?: string | undefined;
        commentCount?: number | undefined;
        description?: string | null | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            storagePath?: yup.Maybe<string | undefined>;
            uri?: yup.Maybe<string | undefined>;
        } | null | undefined;
        backgroundColor?: string | undefined;
        setbackThreshold?: number | null | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        ordinal: number;
        title: string;
        type: "steps";
        steps: number;
    } | {
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        profileId?: string | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        pastTenseTitle?: string | undefined;
        commentCount?: number | undefined;
        description?: string | null | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            storagePath?: yup.Maybe<string | undefined>;
            uri?: yup.Maybe<string | undefined>;
        } | null | undefined;
        backgroundColor?: string | undefined;
        setbackThreshold?: number | null | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        ordinal: number;
        title: string;
        type: "task";
    } | {
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        profileId?: string | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        pastTenseTitle?: string | undefined;
        commentCount?: number | undefined;
        description?: string | null | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            storagePath?: yup.Maybe<string | undefined>;
            uri?: yup.Maybe<string | undefined>;
        } | null | undefined;
        backgroundColor?: string | undefined;
        setbackThreshold?: number | null | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        ordinal: number;
        title: string;
        type: "video";
        video: {
            storagePath?: string | null | undefined;
            url?: string | null | undefined;
            title: string;
            description: string;
            thumbnailUrl: string;
            duration: number;
        };
    })[] | undefined;
}, yup.AnyObject, {
    recommendedForIssueIds: "";
    recommendedForIssueOrdinals: undefined;
    ordinal: undefined;
    title: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    type: undefined;
    slug: undefined;
    creatorProfileId: undefined;
    invitationCode: undefined;
    invitationUrl: undefined;
    tacticsById: undefined;
    next3Tactics: "";
}, "">;
export type FolderValue = yup.InferType<typeof folderSchema>;

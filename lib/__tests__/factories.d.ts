export declare const factories: {
    impulseLogFactory: import("factory.ts").Factory<{
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        text?: string | undefined;
        tacticId?: string | null | undefined;
        tactic?: ({
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            prompt?: string | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            waveForm?: string | null | undefined;
            ordinal: number;
            type: "audio";
            recording: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            };
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            repeat?: import("yup").Maybe<number | undefined>;
            ordinal: number;
            prompt: string;
            type: "breathingExercise";
            inFor: number;
            holdFor: number;
            outFor: number;
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "notifyASupportPerson";
            contactIds: string[];
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "steps";
            steps: number;
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "task";
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "video";
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
                description: string;
                title: string;
                thumbnailUrl: string;
                duration: number;
            };
        }) | import("yup").Maybe<{} | undefined>;
        isGptSender?: boolean | undefined;
        senderProfileId?: string | null | undefined;
        views?: {
            openTime: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            closeTime: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
        }[] | undefined;
        openAiRequestPayload?: string | undefined;
        openAiChoiceResponse?: {} | undefined;
        issueName?: string | undefined;
        debriefAfter?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        submittedAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        type: "impulse";
        date: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        parentIssueIds: string[];
    }, "type" | "date" | "parentIssueIds" | ("createdAt" | "updatedAt" | "text" | "tacticId" | "tactic" | "isGptSender" | "senderProfileId" | "views" | "openAiRequestPayload" | "openAiChoiceResponse" | "issueName" | "debriefAfter" | "submittedAt")>;
    messageLogFactory: import("factory.ts").Factory<{
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        tacticId?: string | null | undefined;
        tactic?: ({
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            prompt?: string | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            waveForm?: string | null | undefined;
            ordinal: number;
            type: "audio";
            recording: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            };
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            repeat?: import("yup").Maybe<number | undefined>;
            ordinal: number;
            prompt: string;
            type: "breathingExercise";
            inFor: number;
            holdFor: number;
            outFor: number;
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "notifyASupportPerson";
            contactIds: string[];
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "steps";
            steps: number;
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "task";
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "video";
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
                description: string;
                title: string;
                thumbnailUrl: string;
                duration: number;
            };
        }) | import("yup").Maybe<{} | undefined>;
        isGptSender?: boolean | undefined;
        senderProfileId?: string | null | undefined;
        views?: {
            openTime: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            closeTime: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
        }[] | undefined;
        openAiRequestPayload?: string | undefined;
        openAiChoiceResponse?: {} | undefined;
        file?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | null | undefined;
        type: "message";
        date: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        text: string;
    }, "type" | "date" | "text" | ("createdAt" | "updatedAt" | "tacticId" | "tactic" | "isGptSender" | "senderProfileId" | "views" | "openAiRequestPayload" | "openAiChoiceResponse" | "file")>;
    questionsLogFactory: import("factory.ts").Factory<{
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        text?: string | undefined;
        tacticId?: string | null | undefined;
        tactic?: ({
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            prompt?: string | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            waveForm?: string | null | undefined;
            ordinal: number;
            type: "audio";
            recording: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            };
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            repeat?: import("yup").Maybe<number | undefined>;
            ordinal: number;
            prompt: string;
            type: "breathingExercise";
            inFor: number;
            holdFor: number;
            outFor: number;
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "notifyASupportPerson";
            contactIds: string[];
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "steps";
            steps: number;
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "task";
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "video";
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
                description: string;
                title: string;
                thumbnailUrl: string;
                duration: number;
            };
        }) | import("yup").Maybe<{} | undefined>;
        isGptSender?: boolean | undefined;
        senderProfileId?: string | null | undefined;
        views?: {
            openTime: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            closeTime: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
        }[] | undefined;
        openAiRequestPayload?: string | undefined;
        openAiChoiceResponse?: {} | undefined;
        submittedAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        questionData?: {
            [x: string]: {
                label?: string | undefined;
                setbackThreshold?: number | undefined;
                color?: string | undefined;
                idValue?: string | undefined;
                numericValue?: number | undefined;
                setAt: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                };
                stringValue: string;
                unit: string;
            };
        } | null | undefined;
        trackingQuestionIds?: string[] | undefined;
        debriefingQuestionIds?: string[] | undefined;
        isDebrief?: boolean | undefined;
        followedUpQuestionIds?: string[] | undefined;
        type: "questions";
        date: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        questionsById: {
            [x: string]: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                setbackThreshold?: number | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "showTour";
                    steps: {
                        title: string;
                        message: string;
                        elementRefName: string;
                        confirmButtonLabel: string;
                    }[];
                } | {
                    message?: string | undefined;
                    type: "writeAnswerToProfile";
                    profileKey: string;
                } | {
                    message?: string | undefined;
                    type: "writeValueToProfile";
                    profileKey: string;
                    value: {};
                })[] | undefined;
                categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
                options?: ({
                    label?: string | undefined;
                    setbackThreshold?: number | undefined;
                    followUps?: ({
                        message?: string | undefined;
                        type: "askAnotherQuestion";
                        questionId: string;
                    } | {
                        message?: string | undefined;
                        type: "showTour";
                        steps: {
                            title: string;
                            message: string;
                            elementRefName: string;
                            confirmButtonLabel: string;
                        }[];
                    } | {
                        message?: string | undefined;
                        type: "writeAnswerToProfile";
                        profileKey: string;
                    } | {
                        message?: string | undefined;
                        type: "writeValueToProfile";
                        profileKey: string;
                        value: {};
                    })[] | undefined;
                    color?: string | undefined;
                    textColor?: string | undefined;
                    greaterThan?: number | undefined;
                    lessThanOrEqualTo?: number | undefined;
                    type: "numeric";
                    text: string;
                } | {
                    label?: string | undefined;
                    followUps?: ({
                        message?: string | undefined;
                        type: "askAnotherQuestion";
                        questionId: string;
                    } | {
                        message?: string | undefined;
                        type: "showTour";
                        steps: {
                            title: string;
                            message: string;
                            elementRefName: string;
                            confirmButtonLabel: string;
                        }[];
                    } | {
                        message?: string | undefined;
                        type: "writeAnswerToProfile";
                        profileKey: string;
                    } | {
                        message?: string | undefined;
                        type: "writeValueToProfile";
                        profileKey: string;
                        value: {};
                    })[] | undefined;
                    color?: string | undefined;
                    textColor?: string | undefined;
                    type: "string";
                    text: string;
                })[] | undefined;
                ordinals?: {
                    [x: string]: number;
                } | null | undefined;
                templateFor?: "onboarding" | undefined;
                writeAnswerToProfileMemoryKey?: string | undefined;
                prompt: string;
                type: "counter";
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "showTour";
                    steps: {
                        title: string;
                        message: string;
                        elementRefName: string;
                        confirmButtonLabel: string;
                    }[];
                } | {
                    message?: string | undefined;
                    type: "writeAnswerToProfile";
                    profileKey: string;
                } | {
                    message?: string | undefined;
                    type: "writeValueToProfile";
                    profileKey: string;
                    value: {};
                })[] | undefined;
                categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
                options?: ({
                    label?: string | undefined;
                    setbackThreshold?: number | undefined;
                    followUps?: ({
                        message?: string | undefined;
                        type: "askAnotherQuestion";
                        questionId: string;
                    } | {
                        message?: string | undefined;
                        type: "showTour";
                        steps: {
                            title: string;
                            message: string;
                            elementRefName: string;
                            confirmButtonLabel: string;
                        }[];
                    } | {
                        message?: string | undefined;
                        type: "writeAnswerToProfile";
                        profileKey: string;
                    } | {
                        message?: string | undefined;
                        type: "writeValueToProfile";
                        profileKey: string;
                        value: {};
                    })[] | undefined;
                    color?: string | undefined;
                    textColor?: string | undefined;
                    greaterThan?: number | undefined;
                    lessThanOrEqualTo?: number | undefined;
                    type: "numeric";
                    text: string;
                } | {
                    label?: string | undefined;
                    followUps?: ({
                        message?: string | undefined;
                        type: "askAnotherQuestion";
                        questionId: string;
                    } | {
                        message?: string | undefined;
                        type: "showTour";
                        steps: {
                            title: string;
                            message: string;
                            elementRefName: string;
                            confirmButtonLabel: string;
                        }[];
                    } | {
                        message?: string | undefined;
                        type: "writeAnswerToProfile";
                        profileKey: string;
                    } | {
                        message?: string | undefined;
                        type: "writeValueToProfile";
                        profileKey: string;
                        value: {};
                    })[] | undefined;
                    color?: string | undefined;
                    textColor?: string | undefined;
                    type: "string";
                    text: string;
                })[] | undefined;
                ordinals?: {
                    [x: string]: number;
                } | null | undefined;
                templateFor?: "onboarding" | undefined;
                writeAnswerToProfileMemoryKey?: string | undefined;
                prompt: string;
                type: "issue";
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "showTour";
                    steps: {
                        title: string;
                        message: string;
                        elementRefName: string;
                        confirmButtonLabel: string;
                    }[];
                } | {
                    message?: string | undefined;
                    type: "writeAnswerToProfile";
                    profileKey: string;
                } | {
                    message?: string | undefined;
                    type: "writeValueToProfile";
                    profileKey: string;
                    value: {};
                })[] | undefined;
                categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
                ordinals?: {
                    [x: string]: number;
                } | null | undefined;
                templateFor?: "onboarding" | undefined;
                writeAnswerToProfileMemoryKey?: string | undefined;
                prompt: string;
                type: "multipleChoice";
                options: ({
                    label?: string | undefined;
                    setbackThreshold?: number | undefined;
                    followUps?: ({
                        message?: string | undefined;
                        type: "askAnotherQuestion";
                        questionId: string;
                    } | {
                        message?: string | undefined;
                        type: "showTour";
                        steps: {
                            title: string;
                            message: string;
                            elementRefName: string;
                            confirmButtonLabel: string;
                        }[];
                    } | {
                        message?: string | undefined;
                        type: "writeAnswerToProfile";
                        profileKey: string;
                    } | {
                        message?: string | undefined;
                        type: "writeValueToProfile";
                        profileKey: string;
                        value: {};
                    })[] | undefined;
                    color?: string | undefined;
                    textColor?: string | undefined;
                    greaterThan?: number | undefined;
                    lessThanOrEqualTo?: number | undefined;
                    type: "numeric";
                    text: string;
                } | {
                    label?: string | undefined;
                    followUps?: ({
                        message?: string | undefined;
                        type: "askAnotherQuestion";
                        questionId: string;
                    } | {
                        message?: string | undefined;
                        type: "showTour";
                        steps: {
                            title: string;
                            message: string;
                            elementRefName: string;
                            confirmButtonLabel: string;
                        }[];
                    } | {
                        message?: string | undefined;
                        type: "writeAnswerToProfile";
                        profileKey: string;
                    } | {
                        message?: string | undefined;
                        type: "writeValueToProfile";
                        profileKey: string;
                        value: {};
                    })[] | undefined;
                    color?: string | undefined;
                    textColor?: string | undefined;
                    type: "string";
                    text: string;
                })[];
                canAddNewOptions: NonNullable<boolean | undefined>;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                setbackThreshold?: number | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "showTour";
                    steps: {
                        title: string;
                        message: string;
                        elementRefName: string;
                        confirmButtonLabel: string;
                    }[];
                } | {
                    message?: string | undefined;
                    type: "writeAnswerToProfile";
                    profileKey: string;
                } | {
                    message?: string | undefined;
                    type: "writeValueToProfile";
                    profileKey: string;
                    value: {};
                })[] | undefined;
                categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
                options?: ({
                    label?: string | undefined;
                    setbackThreshold?: number | undefined;
                    followUps?: ({
                        message?: string | undefined;
                        type: "askAnotherQuestion";
                        questionId: string;
                    } | {
                        message?: string | undefined;
                        type: "showTour";
                        steps: {
                            title: string;
                            message: string;
                            elementRefName: string;
                            confirmButtonLabel: string;
                        }[];
                    } | {
                        message?: string | undefined;
                        type: "writeAnswerToProfile";
                        profileKey: string;
                    } | {
                        message?: string | undefined;
                        type: "writeValueToProfile";
                        profileKey: string;
                        value: {};
                    })[] | undefined;
                    color?: string | undefined;
                    textColor?: string | undefined;
                    greaterThan?: number | undefined;
                    lessThanOrEqualTo?: number | undefined;
                    type: "numeric";
                    text: string;
                } | {
                    label?: string | undefined;
                    followUps?: ({
                        message?: string | undefined;
                        type: "askAnotherQuestion";
                        questionId: string;
                    } | {
                        message?: string | undefined;
                        type: "showTour";
                        steps: {
                            title: string;
                            message: string;
                            elementRefName: string;
                            confirmButtonLabel: string;
                        }[];
                    } | {
                        message?: string | undefined;
                        type: "writeAnswerToProfile";
                        profileKey: string;
                    } | {
                        message?: string | undefined;
                        type: "writeValueToProfile";
                        profileKey: string;
                        value: {};
                    })[] | undefined;
                    color?: string | undefined;
                    textColor?: string | undefined;
                    type: "string";
                    text: string;
                })[] | undefined;
                ordinals?: {
                    [x: string]: number;
                } | null | undefined;
                templateFor?: "onboarding" | undefined;
                writeAnswerToProfileMemoryKey?: string | undefined;
                lowEmoji?: import("yup").Maybe<string | undefined>;
                highEmoji?: import("yup").Maybe<string | undefined>;
                prompt: string;
                type: "scaleOf1To10";
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                setbackThreshold?: number | undefined;
                followUps?: ({
                    message?: string | undefined;
                    type: "askAnotherQuestion";
                    questionId: string;
                } | {
                    message?: string | undefined;
                    type: "showTour";
                    steps: {
                        title: string;
                        message: string;
                        elementRefName: string;
                        confirmButtonLabel: string;
                    }[];
                } | {
                    message?: string | undefined;
                    type: "writeAnswerToProfile";
                    profileKey: string;
                } | {
                    message?: string | undefined;
                    type: "writeValueToProfile";
                    profileKey: string;
                    value: {};
                })[] | undefined;
                categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
                options?: ({
                    label?: string | undefined;
                    setbackThreshold?: number | undefined;
                    followUps?: ({
                        message?: string | undefined;
                        type: "askAnotherQuestion";
                        questionId: string;
                    } | {
                        message?: string | undefined;
                        type: "showTour";
                        steps: {
                            title: string;
                            message: string;
                            elementRefName: string;
                            confirmButtonLabel: string;
                        }[];
                    } | {
                        message?: string | undefined;
                        type: "writeAnswerToProfile";
                        profileKey: string;
                    } | {
                        message?: string | undefined;
                        type: "writeValueToProfile";
                        profileKey: string;
                        value: {};
                    })[] | undefined;
                    color?: string | undefined;
                    textColor?: string | undefined;
                    greaterThan?: number | undefined;
                    lessThanOrEqualTo?: number | undefined;
                    type: "numeric";
                    text: string;
                } | {
                    label?: string | undefined;
                    followUps?: ({
                        message?: string | undefined;
                        type: "askAnotherQuestion";
                        questionId: string;
                    } | {
                        message?: string | undefined;
                        type: "showTour";
                        steps: {
                            title: string;
                            message: string;
                            elementRefName: string;
                            confirmButtonLabel: string;
                        }[];
                    } | {
                        message?: string | undefined;
                        type: "writeAnswerToProfile";
                        profileKey: string;
                    } | {
                        message?: string | undefined;
                        type: "writeValueToProfile";
                        profileKey: string;
                        value: {};
                    })[] | undefined;
                    color?: string | undefined;
                    textColor?: string | undefined;
                    type: "string";
                    text: string;
                })[] | undefined;
                ordinals?: {
                    [x: string]: number;
                } | null | undefined;
                templateFor?: "onboarding" | undefined;
                writeAnswerToProfileMemoryKey?: string | undefined;
                prompt: string;
                type: "time";
            };
        };
    }, "type" | "date" | "questionsById" | ("createdAt" | "updatedAt" | "text" | "tacticId" | "tactic" | "isGptSender" | "senderProfileId" | "views" | "openAiRequestPayload" | "openAiChoiceResponse" | "submittedAt" | "questionData" | "trackingQuestionIds" | "debriefingQuestionIds" | "isDebrief" | "followedUpQuestionIds")>;
    strategiesLogFactory: import("factory.ts").Factory<{
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        text?: string | undefined;
        tacticId?: string | null | undefined;
        tactic?: ({
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            prompt?: string | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            waveForm?: string | null | undefined;
            ordinal: number;
            type: "audio";
            recording: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            };
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            repeat?: import("yup").Maybe<number | undefined>;
            ordinal: number;
            prompt: string;
            type: "breathingExercise";
            inFor: number;
            holdFor: number;
            outFor: number;
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "notifyASupportPerson";
            contactIds: string[];
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "steps";
            steps: number;
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "task";
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "video";
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
                description: string;
                title: string;
                thumbnailUrl: string;
                duration: number;
            };
        }) | import("yup").Maybe<{} | undefined>;
        isGptSender?: boolean | undefined;
        senderProfileId?: string | null | undefined;
        views?: {
            openTime: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            closeTime: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
        }[] | undefined;
        openAiRequestPayload?: string | undefined;
        openAiChoiceResponse?: {} | undefined;
        suggestedStrategyDocPaths?: string[] | undefined;
        type: "strategies";
        date: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        strategiesById: {
            [x: string]: {
                profileId?: string | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isInGameplan?: boolean | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                setbackThreshold?: number | null | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                waveForm?: string | null | undefined;
                ordinal: number;
                type: "audio";
                recording: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                };
            } | {
                profileId?: string | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isInGameplan?: boolean | undefined;
                description?: string | null | undefined;
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                setbackThreshold?: number | null | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                repeat?: import("yup").Maybe<number | undefined>;
                ordinal: number;
                prompt: string;
                type: "breathingExercise";
                inFor: number;
                holdFor: number;
                outFor: number;
            } | {
                profileId?: string | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isInGameplan?: boolean | undefined;
                description?: string | null | undefined;
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                setbackThreshold?: number | null | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                ordinal: number;
                prompt: string;
                type: "notifyASupportPerson";
                contactIds: string[];
            } | {
                profileId?: string | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isInGameplan?: boolean | undefined;
                description?: string | null | undefined;
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                setbackThreshold?: number | null | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                ordinal: number;
                prompt: string;
                type: "steps";
                steps: number;
            } | {
                profileId?: string | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isInGameplan?: boolean | undefined;
                description?: string | null | undefined;
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                setbackThreshold?: number | null | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                ordinal: number;
                prompt: string;
                type: "task";
            } | {
                profileId?: string | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isInGameplan?: boolean | undefined;
                description?: string | null | undefined;
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                setbackThreshold?: number | null | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                ordinal: number;
                prompt: string;
                type: "video";
                video: {
                    storagePath?: string | null | undefined;
                    url?: string | null | undefined;
                    description: string;
                    title: string;
                    thumbnailUrl: string;
                    duration: number;
                };
            } | {
                profileId?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isInGameplan?: boolean | undefined;
                description?: string | null | undefined;
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                tacticsById?: {
                    [x: string]: {
                        profileId?: string | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        prompt?: string | undefined;
                        description?: string | null | undefined;
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            toJSON?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            toJSON?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        pastTenseTitle?: string | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            storagePath?: import("yup").Maybe<string | undefined>;
                            uri?: import("yup").Maybe<string | undefined>;
                        } | null | undefined;
                        backgroundColor?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        waveForm?: string | null | undefined;
                        ordinal: number;
                        type: "audio";
                        recording: {
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            storagePath?: import("yup").Maybe<string | undefined>;
                            uri?: import("yup").Maybe<string | undefined>;
                        };
                    } | {
                        profileId?: string | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        description?: string | null | undefined;
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            toJSON?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            toJSON?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        pastTenseTitle?: string | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            storagePath?: import("yup").Maybe<string | undefined>;
                            uri?: import("yup").Maybe<string | undefined>;
                        } | null | undefined;
                        backgroundColor?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        repeat?: import("yup").Maybe<number | undefined>;
                        ordinal: number;
                        prompt: string;
                        type: "breathingExercise";
                        inFor: number;
                        holdFor: number;
                        outFor: number;
                    } | {
                        profileId?: string | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        description?: string | null | undefined;
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            toJSON?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            toJSON?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        pastTenseTitle?: string | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            storagePath?: import("yup").Maybe<string | undefined>;
                            uri?: import("yup").Maybe<string | undefined>;
                        } | null | undefined;
                        backgroundColor?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        prompt: string;
                        type: "notifyASupportPerson";
                        contactIds: string[];
                    } | {
                        profileId?: string | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        description?: string | null | undefined;
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            toJSON?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            toJSON?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        pastTenseTitle?: string | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            storagePath?: import("yup").Maybe<string | undefined>;
                            uri?: import("yup").Maybe<string | undefined>;
                        } | null | undefined;
                        backgroundColor?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        prompt: string;
                        type: "steps";
                        steps: number;
                    } | {
                        profileId?: string | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        description?: string | null | undefined;
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            toJSON?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            toJSON?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        pastTenseTitle?: string | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            storagePath?: import("yup").Maybe<string | undefined>;
                            uri?: import("yup").Maybe<string | undefined>;
                        } | null | undefined;
                        backgroundColor?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        prompt: string;
                        type: "task";
                    } | {
                        profileId?: string | null | undefined;
                        recommendedForIssueIds?: string[] | undefined;
                        recommendedForIssueOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        isInGameplan?: boolean | undefined;
                        description?: string | null | undefined;
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            toJSON?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        updatedAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            toJSON?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        } | null | undefined;
                        pastTenseTitle?: string | undefined;
                        debriefAfterMinutes?: number | null | undefined;
                        image?: {
                            localFilePath?: import("yup").Maybe<string | undefined>;
                            storagePath?: import("yup").Maybe<string | undefined>;
                            uri?: import("yup").Maybe<string | undefined>;
                        } | null | undefined;
                        backgroundColor?: string | undefined;
                        setbackThreshold?: number | null | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: import("yup").Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        prompt: string;
                        type: "video";
                        video: {
                            storagePath?: string | null | undefined;
                            url?: string | null | undefined;
                            description: string;
                            title: string;
                            thumbnailUrl: string;
                            duration: number;
                        };
                    };
                } | null | undefined;
                slug?: string | undefined;
                creatorProfileId?: string | undefined;
                next3Tactics?: ({
                    profileId?: string | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    prompt?: string | undefined;
                    description?: string | null | undefined;
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        toJSON?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        toJSON?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    waveForm?: string | null | undefined;
                    ordinal: number;
                    type: "audio";
                    recording: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    };
                } | {
                    profileId?: string | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    description?: string | null | undefined;
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        toJSON?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        toJSON?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    repeat?: import("yup").Maybe<number | undefined>;
                    ordinal: number;
                    prompt: string;
                    type: "breathingExercise";
                    inFor: number;
                    holdFor: number;
                    outFor: number;
                } | {
                    profileId?: string | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    description?: string | null | undefined;
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        toJSON?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        toJSON?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    ordinal: number;
                    prompt: string;
                    type: "notifyASupportPerson";
                    contactIds: string[];
                } | {
                    profileId?: string | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    description?: string | null | undefined;
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        toJSON?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        toJSON?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    ordinal: number;
                    prompt: string;
                    type: "steps";
                    steps: number;
                } | {
                    profileId?: string | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    description?: string | null | undefined;
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        toJSON?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        toJSON?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    ordinal: number;
                    prompt: string;
                    type: "task";
                } | {
                    profileId?: string | null | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    recommendedForIssueOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    isInGameplan?: boolean | undefined;
                    description?: string | null | undefined;
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        toJSON?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        toJSON?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    backgroundColor?: string | undefined;
                    setbackThreshold?: number | null | undefined;
                    likesCount?: number | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isSuggested?: boolean | undefined;
                    ordinal: number;
                    prompt: string;
                    type: "video";
                    video: {
                        storagePath?: string | null | undefined;
                        url?: string | null | undefined;
                        description: string;
                        title: string;
                        thumbnailUrl: string;
                        duration: number;
                    };
                })[] | undefined;
                nextTacticId?: string | undefined;
                ordinal: number;
                prompt: string;
                type: "folder";
                isShared: NonNullable<boolean | undefined>;
                invitationCode: string;
                invitationUrl: string;
            };
        };
        completedTacticIds: string[];
        followedUpTacticIds: string[];
    }, "type" | "date" | "strategiesById" | "completedTacticIds" | "followedUpTacticIds" | ("createdAt" | "updatedAt" | "text" | "tacticId" | "tactic" | "isGptSender" | "senderProfileId" | "views" | "openAiRequestPayload" | "openAiChoiceResponse" | "suggestedStrategyDocPaths")>;
    questionTimeFactory: import("factory.ts").Factory<{
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        setbackThreshold?: number | undefined;
        followUps?: ({
            message?: string | undefined;
            type: "askAnotherQuestion";
            questionId: string;
        } | {
            message?: string | undefined;
            type: "showTour";
            steps: {
                title: string;
                message: string;
                elementRefName: string;
                confirmButtonLabel: string;
            }[];
        } | {
            message?: string | undefined;
            type: "writeAnswerToProfile";
            profileKey: string;
        } | {
            message?: string | undefined;
            type: "writeValueToProfile";
            profileKey: string;
            value: {};
        })[] | undefined;
        categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
        options?: ({
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            followUps?: ({
                message?: string | undefined;
                type: "askAnotherQuestion";
                questionId: string;
            } | {
                message?: string | undefined;
                type: "showTour";
                steps: {
                    title: string;
                    message: string;
                    elementRefName: string;
                    confirmButtonLabel: string;
                }[];
            } | {
                message?: string | undefined;
                type: "writeAnswerToProfile";
                profileKey: string;
            } | {
                message?: string | undefined;
                type: "writeValueToProfile";
                profileKey: string;
                value: {};
            })[] | undefined;
            color?: string | undefined;
            textColor?: string | undefined;
            greaterThan?: number | undefined;
            lessThanOrEqualTo?: number | undefined;
            type: "numeric";
            text: string;
        } | {
            label?: string | undefined;
            followUps?: ({
                message?: string | undefined;
                type: "askAnotherQuestion";
                questionId: string;
            } | {
                message?: string | undefined;
                type: "showTour";
                steps: {
                    title: string;
                    message: string;
                    elementRefName: string;
                    confirmButtonLabel: string;
                }[];
            } | {
                message?: string | undefined;
                type: "writeAnswerToProfile";
                profileKey: string;
            } | {
                message?: string | undefined;
                type: "writeValueToProfile";
                profileKey: string;
                value: {};
            })[] | undefined;
            color?: string | undefined;
            textColor?: string | undefined;
            type: "string";
            text: string;
        })[] | undefined;
        ordinals?: {
            [x: string]: number;
        } | null | undefined;
        templateFor?: "onboarding" | undefined;
        writeAnswerToProfileMemoryKey?: string | undefined;
        prompt: string;
        type: "time";
    }, "prompt" | "type" | ("createdAt" | "updatedAt" | "setbackThreshold" | "followUps" | "categories" | "options" | "ordinals" | "templateFor" | "writeAnswerToProfileMemoryKey")>;
    questionMultipleChoiceFactory: import("factory.ts").Factory<{
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        followUps?: ({
            message?: string | undefined;
            type: "askAnotherQuestion";
            questionId: string;
        } | {
            message?: string | undefined;
            type: "showTour";
            steps: {
                title: string;
                message: string;
                elementRefName: string;
                confirmButtonLabel: string;
            }[];
        } | {
            message?: string | undefined;
            type: "writeAnswerToProfile";
            profileKey: string;
        } | {
            message?: string | undefined;
            type: "writeValueToProfile";
            profileKey: string;
            value: {};
        })[] | undefined;
        categories?: ("emotions" | "impulses" | "other" | "dailyReview" | "afterSuccess" | "afterSetback")[] | undefined;
        ordinals?: {
            [x: string]: number;
        } | null | undefined;
        templateFor?: "onboarding" | undefined;
        writeAnswerToProfileMemoryKey?: string | undefined;
        prompt: string;
        type: "multipleChoice";
        options: ({
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            followUps?: ({
                message?: string | undefined;
                type: "askAnotherQuestion";
                questionId: string;
            } | {
                message?: string | undefined;
                type: "showTour";
                steps: {
                    title: string;
                    message: string;
                    elementRefName: string;
                    confirmButtonLabel: string;
                }[];
            } | {
                message?: string | undefined;
                type: "writeAnswerToProfile";
                profileKey: string;
            } | {
                message?: string | undefined;
                type: "writeValueToProfile";
                profileKey: string;
                value: {};
            })[] | undefined;
            color?: string | undefined;
            textColor?: string | undefined;
            greaterThan?: number | undefined;
            lessThanOrEqualTo?: number | undefined;
            type: "numeric";
            text: string;
        } | {
            label?: string | undefined;
            followUps?: ({
                message?: string | undefined;
                type: "askAnotherQuestion";
                questionId: string;
            } | {
                message?: string | undefined;
                type: "showTour";
                steps: {
                    title: string;
                    message: string;
                    elementRefName: string;
                    confirmButtonLabel: string;
                }[];
            } | {
                message?: string | undefined;
                type: "writeAnswerToProfile";
                profileKey: string;
            } | {
                message?: string | undefined;
                type: "writeValueToProfile";
                profileKey: string;
                value: {};
            })[] | undefined;
            color?: string | undefined;
            textColor?: string | undefined;
            type: "string";
            text: string;
        })[];
        canAddNewOptions: NonNullable<boolean | undefined>;
    }, "prompt" | "type" | "options" | "canAddNewOptions" | ("createdAt" | "updatedAt" | "followUps" | "categories" | "ordinals" | "templateFor" | "writeAnswerToProfileMemoryKey")>;
    applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>;
    dayFactory: import("factory.ts").Factory<import("..").DayValue, "date" | "issueName" | "questionsById" | "logsById" | "threadsById">;
    folderFactory: import("factory.ts").Factory<{
        profileId?: string | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        isInGameplan?: boolean | undefined;
        description?: string | null | undefined;
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        tacticsById?: {
            [x: string]: {
                profileId?: string | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isInGameplan?: boolean | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                setbackThreshold?: number | null | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                waveForm?: string | null | undefined;
                ordinal: number;
                type: "audio";
                recording: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                };
            } | {
                profileId?: string | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isInGameplan?: boolean | undefined;
                description?: string | null | undefined;
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                setbackThreshold?: number | null | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                repeat?: import("yup").Maybe<number | undefined>;
                ordinal: number;
                prompt: string;
                type: "breathingExercise";
                inFor: number;
                holdFor: number;
                outFor: number;
            } | {
                profileId?: string | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isInGameplan?: boolean | undefined;
                description?: string | null | undefined;
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                setbackThreshold?: number | null | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                ordinal: number;
                prompt: string;
                type: "notifyASupportPerson";
                contactIds: string[];
            } | {
                profileId?: string | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isInGameplan?: boolean | undefined;
                description?: string | null | undefined;
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                setbackThreshold?: number | null | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                ordinal: number;
                prompt: string;
                type: "steps";
                steps: number;
            } | {
                profileId?: string | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isInGameplan?: boolean | undefined;
                description?: string | null | undefined;
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                setbackThreshold?: number | null | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                ordinal: number;
                prompt: string;
                type: "task";
            } | {
                profileId?: string | null | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isInGameplan?: boolean | undefined;
                description?: string | null | undefined;
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                setbackThreshold?: number | null | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                ordinal: number;
                prompt: string;
                type: "video";
                video: {
                    storagePath?: string | null | undefined;
                    url?: string | null | undefined;
                    description: string;
                    title: string;
                    thumbnailUrl: string;
                    duration: number;
                };
            };
        } | null | undefined;
        slug?: string | undefined;
        creatorProfileId?: string | undefined;
        next3Tactics?: ({
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            prompt?: string | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            waveForm?: string | null | undefined;
            ordinal: number;
            type: "audio";
            recording: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            };
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            repeat?: import("yup").Maybe<number | undefined>;
            ordinal: number;
            prompt: string;
            type: "breathingExercise";
            inFor: number;
            holdFor: number;
            outFor: number;
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "notifyASupportPerson";
            contactIds: string[];
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "steps";
            steps: number;
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "task";
        } | {
            profileId?: string | null | undefined;
            recommendedForIssueIds?: string[] | undefined;
            recommendedForIssueOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            isInGameplan?: boolean | undefined;
            description?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            pastTenseTitle?: string | undefined;
            debriefAfterMinutes?: number | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            setbackThreshold?: number | null | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            ordinal: number;
            prompt: string;
            type: "video";
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
                description: string;
                title: string;
                thumbnailUrl: string;
                duration: number;
            };
        })[] | undefined;
        nextTacticId?: string | undefined;
        ordinal: number;
        prompt: string;
        type: "folder";
        isShared: NonNullable<boolean | undefined>;
        invitationCode: string;
        invitationUrl: string;
    }, "ordinal" | "prompt" | "type" | "isShared" | "invitationCode" | "invitationUrl" | ("profileId" | "recommendedForIssueIds" | "recommendedForIssueOrdinals" | "isInGameplan" | "description" | "createdAt" | "updatedAt" | "tacticsById" | "slug" | "creatorProfileId" | "next3Tactics" | "nextTacticId")>;
    issueFactory: import("factory.ts").Factory<{
        path?: string | null | undefined;
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        parentId?: string | null | undefined;
        shouldGenerateStrategies?: boolean | undefined;
        profileCount?: number | null | undefined;
        isFeatured?: boolean | null | undefined;
        ordinal: number;
        name: string;
        debriefQuestionPrompt: string;
        synonyms: string[];
        parentIds: string[];
        parentNames: string[];
    }, "ordinal" | "name" | "debriefQuestionPrompt" | "synonyms" | "parentIds" | "parentNames" | ("path" | "createdAt" | "updatedAt" | "parentId" | "shouldGenerateStrategies" | "profileCount" | "isFeatured")>;
    locationFactory: import("factory.ts").Factory<{
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        latitude?: number | undefined;
        longitude?: number | undefined;
        profileId: string;
        name: string;
        address: string;
    }, "profileId" | "name" | "address" | ("createdAt" | "updatedAt" | "latitude" | "longitude")>;
    daysSummaryFactory: import("factory.ts").Factory<{
        [x: string]: {
            [x: string]: {
                label?: string | undefined;
                setbackThreshold?: number | undefined;
                color?: string | undefined;
                idValue?: string | undefined;
                numericValue?: number | undefined;
                setAt: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                };
                stringValue: string;
                unit: string;
            };
        };
    }, string | number>;
    profileFactory: import("factory.ts").Factory<{
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        setbackThreshold?: number | undefined;
        issueName?: string | undefined;
        parentIssueIds?: string[] | undefined;
        whatsappFolderDoc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
        lastActiveAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        widgetInstalledAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        widgetLastPressedAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        activeImpulseDoc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
        activeThreadDoc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
        scheduledNotificationIds?: string[] | undefined;
        currentAppState?: import("react-native/types").AppStateStatus | undefined;
        expoPushToken?: string | undefined;
        notificationPreferences?: {
            [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
        } | null | undefined;
        impulseCanManageQuestions?: boolean | undefined;
        impulseCanManageGameplan?: boolean | undefined;
        issueDebriefQuestionPrompt?: string | undefined;
        isReadyForTour?: boolean | undefined;
        isOnboardingComplete?: boolean | undefined;
        gameplanStrategies?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
        androidPermissions?: {
            [x: string]: NonNullable<boolean | undefined>;
        } | null | undefined;
        impulseContext?: string | null | undefined;
        longTermMemory?: {
            [x: string]: {
                label?: string | undefined;
                setbackThreshold?: number | undefined;
                color?: string | undefined;
                idValue?: string | undefined;
                numericValue?: number | undefined;
                setAt: {
                    isEqual?: any;
                    toMillis?: any;
                    toJSON?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                };
                stringValue: string;
                unit: string;
            };
        } | null | undefined;
        region?: string | null | undefined;
        dailyReview: "morning" | "evening" | null;
        uids: string[];
        issueId: string | null;
        timezone: string;
    }, "dailyReview" | "uids" | "issueId" | "timezone" | ("createdAt" | "updatedAt" | "setbackThreshold" | "issueName" | "parentIssueIds" | "whatsappFolderDoc" | "lastActiveAt" | "widgetInstalledAt" | "widgetLastPressedAt" | "activeImpulseDoc" | "activeThreadDoc" | "scheduledNotificationIds" | "currentAppState" | "expoPushToken" | "notificationPreferences" | "impulseCanManageQuestions" | "impulseCanManageGameplan" | "issueDebriefQuestionPrompt" | "isReadyForTour" | "isOnboardingComplete" | "gameplanStrategies" | "androidPermissions" | "impulseContext" | "longTermMemory" | "region")>;
    timeRoutineFactory: import("factory.ts").Factory<{
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            toJSON?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        profileId: string;
        type: "time";
        name: string;
        weekdays: number[];
        hour: number;
        minute: number;
    }, "profileId" | "type" | "name" | "weekdays" | "hour" | "minute" | ("createdAt" | "updatedAt")>;
    tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "profileId" | "recommendedForIssueIds" | "recommendedForIssueOrdinals" | "isInGameplan" | "ordinal" | "prompt" | "description" | "type" | "createdAt" | "updatedAt" | "pastTenseTitle" | "debriefAfterMinutes" | "image" | "backgroundColor" | "setbackThreshold" | "likesCount" | "timerSeconds" | "isSuggested">;
};

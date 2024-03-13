import * as yup from 'yup';
import { TacticValue } from '.';
export type NonRecursiveTactic = Exclude<TacticValue, FolderTacticValue>;
export declare const folderTacticSchema: yup.ObjectSchema<{
    type: "folder";
    uid: string | null | undefined;
    sourceId: string | undefined;
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
    numberOfLikes: number | null | undefined;
    isSuggested: boolean | undefined;
    tacticIds: string[];
    suggestedTacticIds: string[] | undefined;
    currentTacticIndex: number;
    tacticsById: {};
    autogenerate: boolean | undefined;
}, yup.AnyObject, {
    type: undefined;
    uid: undefined;
    sourceId: undefined;
    createdAt: undefined;
    updatedAt: undefined;
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
    numberOfLikes: undefined;
    isSuggested: undefined;
    tacticIds: "";
    suggestedTacticIds: "";
    currentTacticIndex: undefined;
    tacticsById: {};
    autogenerate: undefined;
}, "">;
export type FolderTacticValue = Omit<yup.InferType<typeof folderTacticSchema>, 'tacticsById'> & {
    tacticsById: Record<string, NonRecursiveTactic>;
};

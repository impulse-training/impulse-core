import * as yup from 'yup';
export declare function strategyBaseSchema<K extends string>(type: K): yup.ObjectSchema<{
    type: yup.Defined<K>;
    title: string;
    prompt: yup.Maybe<string | undefined>;
    tacticIds: string[];
    suggestedTacticIds: string[] | undefined;
}, yup.AnyObject, {
    type: undefined;
    title: undefined;
    prompt: undefined;
    tacticIds: "";
    suggestedTacticIds: "";
}, "">;

import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils';
export declare const makeProfileLogsSummaryFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    [x: string]: {
        [x: string]: {
            idValue?: string | undefined;
            numericValue?: number | undefined;
            setAt: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            stringValue: string;
            unit: string;
        };
    };
}, string | number>;

import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils';
export declare const makeProfileLogsSummaryFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    [x: string]: {
        [x: string]: {
            label?: string | undefined;
            idValue?: string | undefined;
            numericValue?: number | undefined;
            labelColor?: string | undefined;
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

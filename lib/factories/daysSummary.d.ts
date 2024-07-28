import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils';
export declare const makeDaysSummaryFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    [x: string]: {
        [x: string]: {
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            idValue?: string | undefined;
            numericValue?: number | undefined;
            color?: string | undefined;
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

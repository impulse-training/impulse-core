import * as Factory from 'factory.ts';
export declare const profileLogsSummaryFactory: Factory.Sync.Factory<{
    [x: string]: {
        [x: string]: {
            optionId?: string | undefined;
            optionLabel?: string | undefined;
            optionColor?: string | undefined;
            optionTextColor?: string | undefined;
            dataCustomUnit?: string | undefined;
            dataUnit: NonNullable<"time" | "custom" | undefined>;
            totalDataValue: number;
            formattedTotalDataValue: string;
        };
    };
}, string | number>;

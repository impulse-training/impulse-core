export declare class TimestampLike {
    seconds: number;
    nanoseconds: number;
    constructor(seconds: number, nanoseconds: number);
    static now(): TimestampLike;
    static fromDate(date: Date): TimestampLike;
    static fromMillis(milliseconds: number): TimestampLike;
    toDate(): Date;
    toMillis(): number;
    isEqual(other: TimestampLike): boolean;
    /** Returns a textual representation of this `Timestamp`. */
    toString(): string;
    valueOf(): string;
}

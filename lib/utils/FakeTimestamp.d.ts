export declare class FakeTimestamp {
    seconds: number;
    nanoseconds: number;
    constructor(seconds: number, nanoseconds: number);
    static now(): FakeTimestamp;
    static fromDate(date: Date): FakeTimestamp;
    static fromMillis(milliseconds: number): FakeTimestamp;
    toDate(): Date;
    toMillis(): number;
    isEqual(other: FakeTimestamp): boolean;
    /** Returns a textual representation of this `Timestamp`. */
    toString(): string;
    valueOf(): string;
}

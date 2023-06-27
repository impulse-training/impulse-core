import { PatternValue } from '../schema';
export declare class Pattern {
    private id;
    private data;
    constructor(id: string, data: PatternValue);
    get transformFunction(): typeof exponentialGrowth;
    get inverseExponentialGrowth(): {
        <T>(value: T): T;
        (): undefined;
    } | typeof inverseExponentialGrowth;
}
export declare function exponentialGrowth(baseValue: number): number;
export declare function inverseExponentialGrowth(y: number, initialGuess?: number, tolerance?: number): number;

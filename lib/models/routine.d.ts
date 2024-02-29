import { LocationValue } from '../schema';
import { DayDebriefRoutineValue, LocationRoutineValue, RoutineValue, TimeRoutineValue } from '../schema/routine';
export declare const SHORT_DAYS: {
    [key: number]: string;
};
export declare abstract class Routine {
    abstract get summary(): string | null;
    static from(id: string, routine: RoutineValue, location?: LocationValue): TimeRoutine | DayDebriefRoutine | LocationRoutine;
}
export declare class TimeRoutine extends Routine {
    private id;
    private data;
    constructor(id: string, data: TimeRoutineValue);
    static DAYS: {
        [key: number]: string;
    };
    get title(): string;
    get summary(): string;
}
export declare class DayDebriefRoutine extends Routine {
    private id;
    private data;
    constructor(id: string, data: DayDebriefRoutineValue);
    static DAYS: {
        [key: number]: string;
    };
    get title(): string;
    get summary(): string;
}
export declare class LocationRoutine extends Routine {
    private id;
    private data;
    private location?;
    constructor(id: string, data: LocationRoutineValue, location?: LocationValue | undefined);
    get title(): string;
    get summary(): string;
}

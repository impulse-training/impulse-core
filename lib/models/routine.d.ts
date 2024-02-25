import { LocationValue } from '../schema';
import { DayDebriefRoutineValue, LocationRoutineValue, RoutineValue, TimeRoutineValue } from '../schema/routine';
export declare const SHORT_DAYS: {
    [key: number]: string;
};
declare abstract class Routine {
    abstract get summary(): string | null;
}
export declare class TimeRoutine extends Routine {
    private id;
    private data;
    constructor(id: string, data: TimeRoutineValue);
    static DAYS: {
        [key: number]: string;
    };
    get summary(): string | null;
}
export declare class DayDebriefRoutine extends Routine {
    private id;
    private data;
    constructor(id: string, data: DayDebriefRoutineValue);
    static DAYS: {
        [key: number]: string;
    };
    get summary(): string;
}
export declare class LocationRoutine extends Routine {
    private id;
    private data;
    private location;
    constructor(id: string, data: LocationRoutineValue, location: LocationValue);
    get summary(): string;
}
export declare function gameplanToClass(id: string, gameplan: RoutineValue, location?: LocationValue): TimeRoutine | DayDebriefRoutine | LocationRoutine;
export {};

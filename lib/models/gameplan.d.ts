import { LocationValue } from '../schema';
import { DebriefGameplanValue, GameplanValue, ImpulseGameplanValue, LocationGameplanValue, TimeGameplanValue } from '../schema/gameplan';
export declare const SHORT_DAYS: {
    [key: number]: string;
};
declare abstract class Gameplan {
    abstract get summary(): string | null;
}
export declare class TimeGameplan extends Gameplan {
    private id;
    private data;
    constructor(id: string, data: TimeGameplanValue);
    static DAYS: {
        [key: number]: string;
    };
    get summary(): string | null;
}
export declare class DebriefGameplan extends Gameplan {
    private id;
    private data;
    constructor(id: string, data: DebriefGameplanValue);
    static DAYS: {
        [key: number]: string;
    };
    get summary(): string;
}
export declare class LocationGameplan extends Gameplan {
    private id;
    private data;
    private location;
    constructor(id: string, data: LocationGameplanValue, location: LocationValue);
    get summary(): string;
}
export declare class ImpulseGameplan extends Gameplan {
    private id;
    private data;
    constructor(id: string, data: ImpulseGameplanValue);
    get summary(): "When I have a success" | "When I have a setback" | "When I have an impulse moment";
}
export declare function gameplanToClass(id: string, gameplan: GameplanValue, location: LocationValue): TimeGameplan | DebriefGameplan | LocationGameplan | ImpulseGameplan;
export {};

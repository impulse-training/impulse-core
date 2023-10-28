import { LocationValue } from '../schema';
import { GameplanValue, LocationGameplanValue, TimeGameplanValue } from '../schema/gameplan';
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
export declare class LocationGameplan extends Gameplan {
    private id;
    private data;
    private location;
    constructor(id: string, data: LocationGameplanValue, location: LocationValue);
    get summary(): string;
}
export declare function gameplanToClass(id: string, gameplan: GameplanValue, location: LocationValue): TimeGameplan | LocationGameplan | undefined;
export {};

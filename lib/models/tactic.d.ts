import { EmotionsTacticValue, FolderTacticValue, QuestionTacticValue, TacticValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare abstract class Tactic {
    static from(id: string, value: TacticValue, T: typeof TimestampLike): EmotionsTactic | QuestionTactic | FolderTactic | OtherTactic;
    get subtitle(): string | null;
}
declare class OtherTactic extends Tactic {
    private id;
    private data;
    private T;
    constructor(id: string, data: TacticValue, T: typeof TimestampLike);
}
declare class FolderTactic extends Tactic {
    private id;
    private data;
    private T;
    constructor(id: string, data: FolderTacticValue, T: typeof TimestampLike);
    get subtitle(): string | null;
}
declare class EmotionsTactic extends Tactic {
    private id;
    private data;
    private T;
    constructor(id: string, data: EmotionsTacticValue, T: typeof TimestampLike);
    get subtitle(): string;
}
declare class QuestionTactic extends Tactic {
    private id;
    private data;
    private T;
    constructor(id: string, data: QuestionTacticValue, T: typeof TimestampLike);
    get subtitle(): string;
}
export {};

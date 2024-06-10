import { TacticValue, TacticsById } from '../schema/strategy/tactic';
import { DocumentSnapshotLike } from './firestore/DocumentSnapshotLike';
export declare function tacticsById(tactics: DocumentSnapshotLike<TacticValue>[]): TacticsById;

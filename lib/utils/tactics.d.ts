import { TacticValue, TacticsById } from '../schema';
import { DocumentSnapshotLike } from './firestore/DocumentSnapshotLike';
export declare function tacticsById(tactics: DocumentSnapshotLike<TacticValue>[]): TacticsById;

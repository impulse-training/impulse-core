import { keyBy, mapValues } from 'lodash';
import { TacticValue, TacticsById } from '../schema/strategy/tactic';
import { DocumentSnapshotLike } from './firestore/DocumentSnapshotLike';

export function tacticsById(
  tactics: DocumentSnapshotLike<TacticValue>[]
): TacticsById {
  return mapValues(keyBy(tactics, 'id'), (doc, id) => ({
    id,
    path: doc.ref.path,
    tactic: doc.data()!,
  }));
}

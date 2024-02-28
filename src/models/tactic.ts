import {
  EmotionsTacticValue,
  FolderTacticValue,
  QuestionTacticValue,
  TacticValue,
} from '../schema';
import { TimestampLike } from '../utils/TimestampLike';

export abstract class Tactic {
  static from(id: string, value: TacticValue, T: typeof TimestampLike) {
    switch (value.type) {
      case 'emotions':
        return new EmotionsTactic(id, value as EmotionsTacticValue, T);
      case 'question':
        return new QuestionTactic(id, value as QuestionTacticValue, T);
      case 'folder':
        return new FolderTactic(id, value as FolderTacticValue, T);
      default:
        return new OtherTactic(id, value, T);
    }
  }

  get subtitle(): string | null {
    return null;
  }
}

class OtherTactic extends Tactic {
  constructor(
    private id: string,
    private data: TacticValue,
    private T: typeof TimestampLike
  ) {
    super();
  }
}

class FolderTactic extends Tactic {
  constructor(
    private id: string,
    private data: FolderTacticValue,
    private T: typeof TimestampLike
  ) {
    super();
  }

  get subtitle() {
    const { tacticIds, tacticsById } = this.data;
    const firstTactic = tacticsById[tacticIds[0]];
    const suffix =
      tacticIds.length > 1 ? ` and ${tacticIds.length - 1} more` : '';
    return firstTactic ? firstTactic.title + suffix : null;
  }
}

class EmotionsTactic extends Tactic {
  constructor(
    private id: string,
    private data: EmotionsTacticValue,
    private T: typeof TimestampLike
  ) {
    super();
  }

  get subtitle() {
    return 'Check in';
  }
}

class QuestionTactic extends Tactic {
  constructor(
    private id: string,
    private data: QuestionTacticValue,
    private T: typeof TimestampLike
  ) {
    super();
  }

  get subtitle() {
    return 'Ask myself';
  }
}

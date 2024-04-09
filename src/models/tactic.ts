import {
  EmotionsTacticValue,
  QuestionTacticValue,
  TacticValue,
} from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export abstract class Tactic {
  static from(id: string, value: TacticValue, T: typeof TimestampLike) {
    switch (value.type) {
      case 'emotions':
        return new EmotionsTactic(id, value as EmotionsTacticValue, T);
      case 'question-multiple-choice':
        return new QuestionTactic(id, value as QuestionTacticValue, T);
      default:
        return new OtherTactic(id, value, T);
    }
  }

  get subtitle(): string | null {
    return null;
  }

  get title(): string | null {
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

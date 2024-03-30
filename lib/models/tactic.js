"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tactic = void 0;
class Tactic {
    static from(id, value, T) {
        switch (value.type) {
            case 'emotions':
                return new EmotionsTactic(id, value, T);
            case 'question':
                return new QuestionTactic(id, value, T);
            default:
                return new OtherTactic(id, value, T);
        }
    }
    get subtitle() {
        return null;
    }
    get title() {
        return null;
    }
}
exports.Tactic = Tactic;
class OtherTactic extends Tactic {
    constructor(id, data, T) {
        super();
        this.id = id;
        this.data = data;
        this.T = T;
    }
}
class EmotionsTactic extends Tactic {
    constructor(id, data, T) {
        super();
        this.id = id;
        this.data = data;
        this.T = T;
    }
    get subtitle() {
        return 'Check in';
    }
}
class QuestionTactic extends Tactic {
    constructor(id, data, T) {
        super();
        this.id = id;
        this.data = data;
        this.T = T;
    }
    get subtitle() {
        return 'Ask myself';
    }
}

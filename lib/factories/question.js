"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeQuestionMultipleChoiceTacticFactory = exports.makeQuestionTimeTacticFactory = void 0;
const Factory = __importStar(require("factory.ts"));
const makeQuestionTimeTacticFactory = (TimestampKlass) => Factory.makeFactory({
    categories: ['debriefing'],
    prompt: 'How long did you spend?',
    type: 'time',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
});
exports.makeQuestionTimeTacticFactory = makeQuestionTimeTacticFactory;
const makeQuestionMultipleChoiceTacticFactory = (TimestampKlass) => Factory.makeFactory({
    categories: ['debriefing'],
    prompt: 'How are you feeling?',
    type: 'time',
    canAddNewOptions: false,
    options: [
        {
            type: 'string',
            text: 'Sad',
        },
        {
            type: 'string',
            text: 'Happy',
        },
    ],
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
});
exports.makeQuestionMultipleChoiceTacticFactory = makeQuestionMultipleChoiceTacticFactory;

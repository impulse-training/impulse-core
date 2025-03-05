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
exports.makeTacticFactory = void 0;
const Factory = __importStar(require("factory.ts"));
const makeTacticFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    type: 'task',
    prompt: 'Go outside',
    description: "Sometimes you just need to let it out! Find a private spot (we don't want any distractions!) and scream your heart out. Feel the wind in your hair, the rush of adrenaline, and the release of built-up tension. Let your voice fill the space around you and leave all your worries behind. Don't worry about being too loud, let your inner rockstar shine! Just remember, it's not a permanent solution - once you're ready, come on back and let's find some other ways to cope.",
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    backgroundColor: '#FF0000',
});
exports.makeTacticFactory = makeTacticFactory;

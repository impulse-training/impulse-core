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
exports.makeLogFactories = void 0;
const Factory = __importStar(require("factory.ts"));
const makeLogFactories = (TimestampKlass) => ({
    impulseLogFactory: Factory.makeFactory({
        profileId: '1',
        senderProfileId: Factory.each(i => i.toString()),
        type: 'impulse',
        createdAt: TimestampKlass.now(),
        updatedAt: TimestampKlass.now(),
        date: TimestampKlass.now(),
        dateString: '2024-01-01',
        issueName: 'YouTube',
        parentIds: [],
    }),
    messageLogFactory: Factory.makeFactory({
        profileId: '1',
        senderProfileId: Factory.each(i => i.toString()),
        type: 'message',
        createdAt: TimestampKlass.now(),
        updatedAt: TimestampKlass.now(),
        date: TimestampKlass.now(),
        dateString: '2024-01-01',
        text: 'Hello, World!',
    }),
    tacticsLogFactory: Factory.makeFactory({
        profileId: '1',
        senderProfileId: Factory.each(i => i.toString()),
        title: 'Suggestions',
        type: 'tactics',
        createdAt: TimestampKlass.now(),
        updatedAt: TimestampKlass.now(),
        date: TimestampKlass.now(),
        dateString: '2024-01-01',
        tacticsById: {},
        suggestedTacticDocPaths: [],
        completedTacticIds: [],
    }),
});
exports.makeLogFactories = makeLogFactories;

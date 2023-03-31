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
exports.adminProfileFactory = exports.profileFactory = void 0;
const faker_1 = require("@faker-js/faker");
const firestore_1 = require("@google-cloud/firestore");
const Factory = __importStar(require("factory.ts"));
exports.profileFactory = Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    createdAt: firestore_1.Timestamp.now(),
    displayName: faker_1.faker.name.fullName(),
    email: faker_1.faker.internet.email(),
    isAdmin: false,
    region: 'US',
    timezone: 'America/Bogota',
    invitationCode: 'abc123',
});
exports.adminProfileFactory = exports.profileFactory.extend({
    isAdmin: true,
});

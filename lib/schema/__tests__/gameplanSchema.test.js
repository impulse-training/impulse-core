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
const lodash_1 = require("lodash");
const yup_1 = require("yup");
const factoryBuilders = __importStar(require("../../factories/gameplan"));
const TimestampLike_1 = require("../../utils/TimestampLike");
const gameplan_1 = require("../gameplan");
describe('gameplanSchema', () => {
    describe('factories', () => {
        (0, lodash_1.forEach)(factoryBuilders, factoryBuilder => {
            it(factoryBuilder.name, () => {
                const factory = factoryBuilder(TimestampLike_1.TimestampLike);
                const gameplan = factory.build({});
                try {
                    const result = gameplan_1.gameplanSchema.validateSync(gameplan, {
                        abortEarly: false,
                    });
                    expect(result).toBeDefined();
                }
                catch (error) {
                    if (error instanceof yup_1.ValidationError) {
                        // Log each validation error with its path and message
                        error.inner.forEach(err => {
                            console.error(`Validation error at ${err.path}: ${err.message}`);
                        });
                    }
                    else {
                        console.error('An unexpected error occurred:', error);
                    }
                    // Rethrow the error to fail the test
                    throw error;
                }
            });
        });
    });
});

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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LONG_DAYS = exports.SHORT_DAYS = exports.gameplanSchema = void 0;
const yup = __importStar(require("yup"));
const tactic_1 = require("../tactic");
const array_1 = require("../utils/array");
const objectOf_1 = require("../utils/objectOf");
const timestamp_1 = require("../utils/timestamp");
const routines_1 = require("./routines");
const strategy_1 = require("./strategy");
__exportStar(require("./routines"), exports);
__exportStar(require("./strategy"), exports);
exports.gameplanSchema = yup.object().shape({
    uid: yup.string().required(),
    name: yup.string().notRequired(),
    isFeatured: yup.boolean().notRequired(),
    createdAt: timestamp_1.optionalTimestampSchema,
    updatedAt: timestamp_1.optionalTimestampSchema,
    parentIssueIds: array_1.optionalStringArray,
    // Strategies - these are the sequences of tactics to try, including conditional tactics
    impulse: (0, objectOf_1.objectOf)(strategy_1.strategySchema),
    impulseDebrief: (0, objectOf_1.objectOf)(strategy_1.strategySchema),
    // These are the strategies for scheduled times of day...
    time: (0, objectOf_1.optionalObjectOf)(routines_1.timeRoutineSchema.required()),
    // ...Or when arriving at or leaving a location
    location: (0, objectOf_1.optionalObjectOf)(routines_1.locationRoutineSchema.required()),
    // Data - we keep copies of relevant data on the gameplan document, for performance reasons
    tacticsById: (0, objectOf_1.objectOf)(tactic_1.tacticSchema),
    scheduledNotificationIds: array_1.optionalStringArray,
    dontGenerateRecapTacticsForTacticIds: array_1.optionalStringArray,
});
exports.SHORT_DAYS = {
    1: 'Sun',
    2: 'Mon',
    3: 'Tue',
    4: 'Wed',
    5: 'Thu',
    6: 'Fri',
    7: 'Sat',
};
exports.LONG_DAYS = [
    '',
    'Sundays',
    'Mondays',
    'Tuesdays',
    'Wednesdays',
    'Thursdays',
    'Fridays',
    'Saturdays',
];

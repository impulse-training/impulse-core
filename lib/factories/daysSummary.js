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
exports.makeDaysSummaryFactory = void 0;
const Factory = __importStar(require("factory.ts"));
const schema_1 = require("../schema");
const makeDaysSummaryFactory = (TimestampKlass) => Factory.makeFactory({
    dates: {
        '2024-01-01': {
            metrics: {
                'happy-sad': {
                    attribute: {
                        key: 'happy',
                        name: 'Happy',
                        icon: schema_1.MetricIcons.Happy,
                    },
                    data: {
                        absoluteAttributeValue: 4,
                        metricInputValue: 4,
                        label: 'Really happy',
                    },
                },
            },
            behaviors: {
                behavior1: {
                    behavior: {
                        tacticsById: {},
                        ordinal: 0,
                        name: 'Watching youtube',
                        trackingType: 'time',
                        isHelpful: null,
                    },
                    data: {
                        timeSeconds: 60,
                        formattedValue: '1 minute',
                    },
                    // optionId: 'tactic1',
                    // optionColor: 'blue',
                    // optionLabel: 'Tactic 1',
                    // optionTextColor: 'white',
                },
            },
        },
    },
});
exports.makeDaysSummaryFactory = makeDaysSummaryFactory;

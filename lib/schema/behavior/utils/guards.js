"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCounterBehavior = exports.isTimeBehavior = void 0;
const isTimeBehavior = ({ type }) => type === 'time';
exports.isTimeBehavior = isTimeBehavior;
const isCounterBehavior = ({ type }) => type === 'counter';
exports.isCounterBehavior = isCounterBehavior;

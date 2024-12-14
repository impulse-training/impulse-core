"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBehaviorCounter = exports.isBehaviorTime = exports.isBehaviorSlider = void 0;
const isBehaviorSlider = ({ type }) => type === 'scaleOf1To10';
exports.isBehaviorSlider = isBehaviorSlider;
const isBehaviorTime = ({ type }) => type === 'time';
exports.isBehaviorTime = isBehaviorTime;
const isBehaviorCounter = ({ type }) => type === 'counter';
exports.isBehaviorCounter = isBehaviorCounter;

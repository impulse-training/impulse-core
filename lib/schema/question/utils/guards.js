"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isQuestionCounter = exports.isQuestionTime = exports.isQuestionSlider = void 0;
const isQuestionSlider = ({ type }) => type === 'scaleOf1To10';
exports.isQuestionSlider = isQuestionSlider;
const isQuestionTime = ({ type }) => type === 'time';
exports.isQuestionTime = isQuestionTime;
const isQuestionCounter = ({ type }) => type === 'counter';
exports.isQuestionCounter = isQuestionCounter;

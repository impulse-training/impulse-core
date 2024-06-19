"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isQuestionCounter = exports.isQuestionTime = exports.isQuestionSlider = void 0;
const isQuestionSlider = ({ type }) => type === 'question-slider';
exports.isQuestionSlider = isQuestionSlider;
const isQuestionTime = ({ type }) => type === 'question-time';
exports.isQuestionTime = isQuestionTime;
const isQuestionCounter = ({ type }) => type === 'question-counter';
exports.isQuestionCounter = isQuestionCounter;

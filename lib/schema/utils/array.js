"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionalStringArray = exports.requiredStringArray = void 0;
const yup_1 = require("yup");
exports.requiredStringArray = (0, yup_1.array)().of((0, yup_1.string)().required()).required();
exports.optionalStringArray = (0, yup_1.array)().of((0, yup_1.string)().required());

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.folderStrategySchema = void 0;
const folder_1 = require("../folder");
const base_1 = require("./base");
exports.folderStrategySchema = (0, base_1.strategyValueBaseSchema)('folder', folder_1.folderSchema);

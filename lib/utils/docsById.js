"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docsById = void 0;
const lodash_1 = require("lodash");
function docsById(docs) {
    return (0, lodash_1.mapValues)((0, lodash_1.keyBy)(docs, 'id'), doc => doc.data());
}
exports.docsById = docsById;

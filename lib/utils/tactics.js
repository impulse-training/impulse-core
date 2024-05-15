"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticsById = void 0;
const lodash_1 = require("lodash");
function tacticsById(tactics) {
    return (0, lodash_1.mapValues)((0, lodash_1.keyBy)(tactics, 'id'), (doc, id) => ({
        id,
        path: doc.ref.path,
        tactic: doc.data(),
    }));
}
exports.tacticsById = tacticsById;

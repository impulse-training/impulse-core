"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticFactory = exports.profileFactory = exports.regularLogFactory = void 0;
// We also directly export all factories, using our "TimestampLike" class, for unit testing in this
const _1 = require(".");
const TimestampLike_1 = require("../utils/firestore/TimestampLike");
_a = (0, _1.makeFactories)(TimestampLike_1.TimestampLike), exports.regularLogFactory = _a.regularLogFactory, exports.profileFactory = _a.profileFactory, exports.tacticFactory = _a.tacticFactory;

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticFactory = exports.supportGroupFactory = exports.profileFactory = exports.timeLogFactory = exports.impulseFactory = exports.commentFactory = exports.applicationFactory = void 0;
// We also directly export all factories, using our "TimestampLike" class, for unit testing in this
const _1 = require(".");
const TimestampLike_1 = require("../utils/TimestampLike");
_a = (0, _1.makeFactories)(TimestampLike_1.TimestampLike), exports.applicationFactory = _a.applicationFactory, exports.commentFactory = _a.commentFactory, exports.impulseFactory = _a.impulseFactory, exports.timeLogFactory = _a.timeLogFactory, exports.profileFactory = _a.profileFactory, exports.supportGroupFactory = _a.supportGroupFactory, exports.tacticFactory = _a.tacticFactory;

"use strict";
// We also directly export all factories, using our "FakeTimestamp" class, for unit testing in this
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recommendationRuleFactory = exports.tacticFactory = exports.supportGroupFactory = exports.profileFactory = exports.setbackGameplanFactory = exports.successGameplanFactory = exports.logSummaryFactory = exports.debriefLogFactory = exports.recommendationFactory = exports.motionLogFactory = exports.timeLogFactory = exports.impulseFactory = exports.commentFactory = exports.applicationFactory = void 0;
const _1 = require(".");
const FakeTimestamp_1 = require("../utils/FakeTimestamp");
// library
_a = (0, _1.makeFactories)(FakeTimestamp_1.FakeTimestamp), exports.applicationFactory = _a.applicationFactory, exports.commentFactory = _a.commentFactory, exports.impulseFactory = _a.impulseFactory, exports.timeLogFactory = _a.timeLogFactory, exports.motionLogFactory = _a.motionLogFactory, exports.recommendationFactory = _a.recommendationFactory, exports.debriefLogFactory = _a.debriefLogFactory, exports.logSummaryFactory = _a.logSummaryFactory, exports.successGameplanFactory = _a.successGameplanFactory, exports.setbackGameplanFactory = _a.setbackGameplanFactory, exports.profileFactory = _a.profileFactory, exports.supportGroupFactory = _a.supportGroupFactory, exports.tacticFactory = _a.tacticFactory, exports.recommendationRuleFactory = _a.recommendationRuleFactory;
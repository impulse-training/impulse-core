"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.strategySchema = exports.strategySchemas = void 0;
const yup = __importStar(require("yup"));
const folder_1 = require("./folder");
const tactic_1 = require("./tactic");
__exportStar(require("./folder"), exports);
__exportStar(require("./tactic"), exports);
// A strategy is a tactic or a folder. We store them in the top-level strategies collection as well
// as profile-level strategies collections
// Utility to dynamically select the correct schema based on the tactic type
exports.strategySchemas = Object.assign(Object.assign({}, tactic_1.tacticSchemas), { folder: folder_1.folderSchema });
// The tacticSchema is what's used to validate tactics in our database. We set an explicit return
// type to ensure that the conditional validation of only type doesn't infer that a tactic may only
// be an object with only the "type" field specified. Instead, we say that it always returns a
// validator for the known tactic types.
exports.strategySchema = yup.lazy(value => {
    if (typeof value.type === 'string' && value.type in tactic_1.tacticSchemas) {
        return exports.strategySchemas[value.type];
    }
    return yup.object({
        type: yup
            .mixed()
            .oneOf(Object.keys(tactic_1.tacticSchemas))
            .required(),
    });
});

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
exports.optionText = exports.optionMatches = exports.findBestMatchingOption = exports.optionSortValueForDisplay = exports.optionSchema = exports.optionSchemas = void 0;
const lodash_1 = require("lodash");
const yup = __importStar(require("yup"));
const numeric_1 = require("./numeric");
const string_1 = require("./string");
__exportStar(require("./numeric"), exports);
__exportStar(require("./string"), exports);
exports.optionSchemas = {
    string: string_1.stringOptionSchema,
    numeric: numeric_1.numericOptionSchema,
};
exports.optionSchema = yup.lazy(value => {
    if (!value)
        return yup.mixed().required();
    if (typeof value.type === 'string' && value.type in exports.optionSchemas) {
        return exports.optionSchemas[value.type];
    }
    return yup.object({
        type: yup
            .mixed()
            .oneOf(Object.keys(exports.optionSchemas))
            .required(),
    });
});
// For display purposes, we sort by lessThanOrEqualTo ascending, then by greaterThan ascending
// This function returns a tuple to sort the objects.
// It checks if "lessThanOrEqualTo" or "greaterThan" exists and sorts based on these values.
// The second element in the tuple (0 or 1) is used to ensure "lessThanOrEqualTo" comes before "greaterThan" when values are the same.
function optionSortValueForDisplay(option) {
    const { greaterThan, lessThanOrEqualTo } = option;
    // Check if "lessThanOrEqualTo" is defined and use it as the primary sort value with higher
    if (lessThanOrEqualTo === 0)
        return [-1, 0];
    // priority (0).
    if (lessThanOrEqualTo !== undefined)
        [lessThanOrEqualTo, 0];
    // If "lessThanOrEqualTo" is not present, check "greaterThan". It is used as the sort value with
    // lower priority (1).
    if (greaterThan !== undefined)
        [greaterThan, 1];
    // If neither is defined, treat it as the highest value for sorting purposes.
    return [Infinity, 1];
}
exports.optionSortValueForDisplay = optionSortValueForDisplay;
// For matching purposes, we sort by lessThanOrEqualTo ascending, then by greaterThan descending
// We first sort in a way that options with a small lessThanOrEqualTo value are first, then by
// greaterThan value in descending order. This helps us find the "best" matching option
function optionSortValueForMatching(option) {
    return [
        (0, lodash_1.isUndefined)(option.lessThanOrEqualTo)
            ? Infinity
            : option.lessThanOrEqualTo,
        (0, lodash_1.isUndefined)(option.greaterThan)
            ? -Infinity
            : -(option.greaterThan || 0),
    ];
}
function findBestMatchingOption(optionsById, data) {
    const optionsArray = Object.keys(optionsById).map(id => (Object.assign({ id }, optionsById[id])));
    const sortedOptions = (0, lodash_1.sortBy)(optionsArray, optionSortValueForMatching);
    // Find the first key that matches the criteria
    return (0, lodash_1.findKey)(optionsById, (_option, key) => optionMatches(sortedOptions.find(opt => opt.id === key), data));
}
exports.findBestMatchingOption = findBestMatchingOption;
function optionMatches(option, data) {
    if ((0, string_1.optionIsStringOption)(option))
        return option.text === data.stringValue;
    if (option.greaterThan != null)
        return (typeof data.numericValue === 'number' &&
            data.numericValue > option.greaterThan);
    if (option.lessThanOrEqualTo != null)
        return (typeof data.numericValue === 'number' &&
            data.numericValue <= option.lessThanOrEqualTo);
    return false;
}
exports.optionMatches = optionMatches;
function optionText(option) {
    if ((0, numeric_1.optionIsNumericOption)(option))
        return (0, numeric_1.numericOptionText)(option);
    if ((0, string_1.optionIsStringOption)(option))
        return option.text;
    return '';
}
exports.optionText = optionText;

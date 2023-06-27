"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inverseExponentialGrowth = exports.exponentialGrowth = exports.Pattern = void 0;
const lodash_1 = require("lodash");
class Pattern {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
    get transformFunction() {
        return this.data.unit === 'time' ? exponentialGrowth : Math.round;
    }
    get inverseExponentialGrowth() {
        return this.data.unit === 'time' ? inverseExponentialGrowth : lodash_1.identity;
    }
}
exports.Pattern = Pattern;
function exponentialGrowth(baseValue) {
    const val = Math.pow(baseValue, 1.4) + Math.pow(1.08, baseValue);
    return Math.round(val / 5) * 5;
}
exports.exponentialGrowth = exponentialGrowth;
function inverseExponentialGrowth(y, initialGuess = 1, tolerance = 0.1) {
    let x = initialGuess;
    while (Math.abs(y - exponentialGrowth(x)) > tolerance) {
        const f = Math.pow(x, 1.4) + Math.pow(1.08, x) - y;
        const df = 1.4 * Math.pow(x, 0.4) + Math.log(1.08) * Math.pow(1.08, x);
        x = x - f / df;
    }
    return Math.round(x * 100) / 100;
}
exports.inverseExponentialGrowth = inverseExponentialGrowth;

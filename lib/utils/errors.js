"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yupErrorToErrorObject = exports.makeValidationFn = void 0;
function makeValidationFn(schema) {
    return function validate(input) {
        try {
            schema.validateSync(input, { abortEarly: false });
            return {};
        }
        catch (error) {
            return yupErrorToErrorObject(error);
        }
    };
}
exports.makeValidationFn = makeValidationFn;
function yupErrorToErrorObject(err) {
    const object = {};
    err.inner.forEach(x => {
        if (x.path !== undefined) {
            object[x.path] = x.errors;
        }
    });
    return object;
}
exports.yupErrorToErrorObject = yupErrorToErrorObject;

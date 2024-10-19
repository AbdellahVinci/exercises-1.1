"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containsOnlyExpectedKeys = void 0;
/**
 * Returns true if the object contains only keys from the expectedKeys array
 * @param obj
 * @param expectedKeys
 */
const containsOnlyExpectedKeys = (obj, expectedKeys) => {
    return Object.keys(obj).every((key) => expectedKeys.includes(key));
};
exports.containsOnlyExpectedKeys = containsOnlyExpectedKeys;

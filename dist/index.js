"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplyByTwo = multiplyByTwo;
/**
 * Multiplies a number by 2
 * @param input - The number to multiply by 2
 * @returns The result of multiplying input by 2
 * @throws {Error} If input is not a finite number
 */
function multiplyByTwo(input) {
    if (!Number.isFinite(input)) {
        throw new Error('Input must be a finite number');
    }
    return input * 2;
}
/**
 * Default export for convenience
 */
exports.default = multiplyByTwo;
//# sourceMappingURL=index.js.map
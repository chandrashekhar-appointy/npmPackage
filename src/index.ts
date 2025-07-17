/**
 * Multiplies a number by 2
 * @param input - The number to multiply by 2
 * @returns The result of multiplying input by 2
 * @throws {Error} If input is not a finite number
 */
export function multiplyByTwo(input: number): number {
  if (!Number.isFinite(input)) {
    throw new Error('Input must be a finite number');
  }
  return input * 2;
}

/**
 * Multiplies a number by 3
 * @param input - The number to multiply by 3
 * @returns The result of multiplying input by 3
 * @throws {Error} If input is not a finite number
 */
export function multiplyByThree(input: number): number {
  if (!Number.isFinite(input)) {
    throw new Error('Input must be a finite number');
  }
  return input * 3;
}

/**
 * Multiplies a number by any given multiplier
 * @param input - The number to multiply
 * @param multiplier - The multiplier to use
 * @returns The result of multiplying input by multiplier
 * @throws {Error} If input or multiplier is not a finite number
 */
export function multiplyBy(input: number, multiplier: number): number {
  if (!Number.isFinite(input)) {
    throw new Error('Input must be a finite number');
  }
  if (!Number.isFinite(multiplier)) {
    throw new Error('Multiplier must be a finite number');
  }
  return input * multiplier;
}

/**
 * Default export for convenience
 */
export default multiplyByTwo;

import { multiplyByTwo } from '../src/index';

describe('multiplyByTwo', () => {
  describe('valid inputs', () => {
    test('should multiply positive numbers correctly', () => {
      expect(multiplyByTwo(5)).toBe(10);
      expect(multiplyByTwo(1)).toBe(2);
      expect(multiplyByTwo(10)).toBe(20);
    });

    test('should handle zero', () => {
      expect(multiplyByTwo(0)).toBe(0);
    });

    test('should handle negative numbers', () => {
      expect(multiplyByTwo(-3)).toBe(-6);
      expect(multiplyByTwo(-1)).toBe(-2);
      expect(multiplyByTwo(-10)).toBe(-20);
    });

    test('should handle decimal numbers', () => {
      expect(multiplyByTwo(2.5)).toBe(5);
      expect(multiplyByTwo(0.5)).toBe(1);
      expect(multiplyByTwo(-1.5)).toBe(-3);
    });
  });

  describe('invalid inputs', () => {
    test('should throw error for NaN', () => {
      expect(() => multiplyByTwo(NaN)).toThrow('Input must be a finite number');
    });

    test('should throw error for positive infinity', () => {
      expect(() => multiplyByTwo(Infinity)).toThrow('Input must be a finite number');
    });

    test('should throw error for negative infinity', () => {
      expect(() => multiplyByTwo(-Infinity)).toThrow('Input must be a finite number');
    });
  });

  describe('edge cases', () => {
    test('should handle very large numbers', () => {
      expect(multiplyByTwo(999999999)).toBe(1999999998);
    });

    test('should handle very small numbers', () => {
      expect(multiplyByTwo(0.0001)).toBe(0.0002);
    });

    test('should handle Number.MAX_SAFE_INTEGER', () => {
      expect(multiplyByTwo(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER * 2);
    });
  });
}); 
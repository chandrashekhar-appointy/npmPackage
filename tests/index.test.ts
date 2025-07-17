import { multiplyByTwo, multiplyByThree, multiplyBy } from '../src/index';

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

describe('multiplyByThree', () => {
  describe('valid inputs', () => {
    test('should multiply positive numbers correctly', () => {
      expect(multiplyByThree(5)).toBe(15);
      expect(multiplyByThree(1)).toBe(3);
      expect(multiplyByThree(10)).toBe(30);
    });

    test('should handle zero', () => {
      expect(multiplyByThree(0)).toBe(0);
    });

    test('should handle negative numbers', () => {
      expect(multiplyByThree(-3)).toBe(-9);
      expect(multiplyByThree(-2)).toBe(-6);
    });
  });

  describe('invalid inputs', () => {
    test('should throw error for NaN', () => {
      expect(() => multiplyByThree(NaN)).toThrow('Input must be a finite number');
    });

    test('should throw error for infinity', () => {
      expect(() => multiplyByThree(Infinity)).toThrow('Input must be a finite number');
    });
  });
});

describe('multiplyBy', () => {
  describe('valid inputs', () => {
    test('should multiply by any multiplier', () => {
      expect(multiplyBy(5, 4)).toBe(20);
      expect(multiplyBy(3, 7)).toBe(21);
      expect(multiplyBy(10, 0.5)).toBe(5);
    });

    test('should handle zero multiplier', () => {
      expect(multiplyBy(5, 0)).toBe(0);
    });

    test('should handle negative multiplier', () => {
      expect(multiplyBy(5, -2)).toBe(-10);
    });

    test('should handle negative input', () => {
      expect(multiplyBy(-5, 3)).toBe(-15);
    });
  });

  describe('invalid inputs', () => {
    test('should throw error for NaN input', () => {
      expect(() => multiplyBy(NaN, 2)).toThrow('Input must be a finite number');
    });

    test('should throw error for NaN multiplier', () => {
      expect(() => multiplyBy(5, NaN)).toThrow('Multiplier must be a finite number');
    });

    test('should throw error for infinity input', () => {
      expect(() => multiplyBy(Infinity, 2)).toThrow('Input must be a finite number');
    });

    test('should throw error for infinity multiplier', () => {
      expect(() => multiplyBy(5, Infinity)).toThrow('Multiplier must be a finite number');
    });
  });
}); 
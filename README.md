# @chandrashekhar-appointy/privatepackage

A simple TypeScript package that multiplies numbers by 2.

## Installation

```bash
npm install @chandrashekhar-appointy/privatepackage
```

## Usage

```typescript
import { multiplyByTwo, multiplyByThree, multiplyBy } from '@chandrashekhar-appointy/privatepackage';
// or
import multiplyByTwo from '@chandrashekhar-appointy/privatepackage';

// Example usage
const result = multiplyByTwo(6);
console.log(result); // Output: 12

const result2 = multiplyByThree(6);
console.log(result2); // Output: 18

const result3 = multiplyBy(6, 5);
console.log(result3); // Output: 30
```

## API

### `multiplyByTwo(input: number): number`

Multiplies the input number by 2.

**Parameters:**
- `input` (number): The number to multiply by 2

**Returns:**
- `number`: The result of multiplying input by 2

**Example:**
```typescript
multiplyByTwo(6); // returns 12
multiplyByTwo(10); // returns 20
multiplyByTwo(-3); // returns -6
```

### `multiplyByThree(input: number): number`

Multiplies the input number by 3.

**Parameters:**
- `input` (number): The number to multiply by 3

**Returns:**
- `number`: The result of multiplying input by 3

**Example:**
```typescript
multiplyByThree(6); // returns 18
multiplyByThree(10); // returns 30
multiplyByThree(-3); // returns -9
```

### `multiplyBy(input: number, multiplier: number): number`

Multiplies the input number by any given multiplier.

**Parameters:**
- `input` (number): The number to multiply
- `multiplier` (number): The multiplier to use

**Returns:**
- `number`: The result of multiplying input by multiplier

**Example:**
```typescript
multiplyBy(6, 5); // returns 30
multiplyBy(10, 0.5); // returns 5
multiplyBy(-3, 4); // returns -12
```

## License

ISC 


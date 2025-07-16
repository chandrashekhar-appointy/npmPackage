# @Appointy-IDP/privatepackage

A simple TypeScript package that multiplies numbers by 2.

## Installation

```bash
npm install @Appointy-IDP/privatepackage
```

## Usage

```typescript
import { multiplyByTwo } from '@Appointy-IDP/privatepackage';
// or
import multiplyByTwo from '@Appointy-IDP/privatepackage';

// Example usage
const result = multiplyByTwo(6);
console.log(result); // Output: 12
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

## License

ISC 
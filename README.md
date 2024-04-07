# are-arrays


Function for check if all values are arrays.

## Installation

With the simple command `npm install check-arrays`.

## Usage

The function takes any arguments as you want.

Example:

```js
const checkArrays = require('check-arrays');

checkArrays({}, 12, [1, null]); // false
checkArrays([], [1, 33.2]); // true
checkArrays(function(){}, String(), []); // false
```

## Test



## License

MIT

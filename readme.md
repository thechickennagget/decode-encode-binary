## Decode and encode text to binary
### Node module to encode and decode binary numbers
[![NPM](https://nodei.co/npm/decode-and-encode-binary-text.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/decode-and-encode-binary-text/)

[![Build Status](https://travis-ci.org/ChickenNaggetGitHub/encode-decode-binary-text.svg?branch=master)](https://travis-ci.org/ChickenNaggetGitHub/encode-decode-binary-text)
------
## Installation
##### using npm:
```
$ npm install decode-and-encode-binary-text
```
#####
 -----
# Examples
### An example decoding text from binary numbers
------
```js
const test = require("decode-and-encode-binary-text")
console.log(test.decode("0110100001100101011011000110110001101111001000000111011101101111011100100110110001100100"))

// outputs "hello world"
```

### Example encoding text to binary numbers
------
```js
const test = require("decode-and-encode-binary-text")
console.log(test.encode("Hello world!"))

// outputs "01101000011001010110110001101100011011110111011101101111011100100110110001100100"
 ```

### Auto Detecting
##### Automatically detect if you want to encode or decode
------
##### Warning!! this is experimental feature!!

```js
const test = require("decode-and-encode-binary-text")

console.log(test.auto("ok"))
// outputs 0110111101101011

console.log(test.auto("01101111 01101011"))
// outputs "ok"
```

# Other Examples
-----
## Making spaces between every letter in binary
#### ( only in encoding )
```js
const test = require("decode-and-encode-binary-text")
console.log(test.encode("ay", true))

// outputs "01100001 01111001"
```

 > if you need help open new issue in github repository

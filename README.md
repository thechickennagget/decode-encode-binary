# decode-encode-binary
### Lightweight Node Module/CLI to encode & decode binary numbers

![GitHub repo size](https://img.shields.io/github/repo-size/TheChickenNagget/decode-encode-binary?color=dgreen&label=Package%20Size&logo=github)
![Total Downloads](https://badgen.net/npm/dt/decode-encode-binary)
![Required node version](https://badgen.net/npm/node/decode-encode-binary)
![Line](https://github.com/TheChickenNagget/assets/raw/master/images/line.png)

## Installation
##### Using [npm](https://www.npmjs.com/package/decode-encode-binary)
```shell
$ npm install decode-encode-binary
```

##### Using [Yarn](https://yarnpkg.com/en/package/decode-encode-binary)
```shell
$ yarn add decode-encode-binary
```
------

## Using in Terminal
- The Terminal command is `encdec` or `decenc` (both function the same)
- Using in Terminal requires to have package installed with the `--global` tag
```shell
$ encdec
$ > Enter your Input (Binary or Text)
$ > Hi
$ 0100100001101001
```
```shell 
$ decenc
$ > Enter your Input (Binary or Text)
$ > 0100100001101001
$ Hi
```
------

## Examples
#### An example **Decoding** text from binary numbers

```js
const test = require("decode-encode-binary");
console.log(test.decode("0100100001100101011011000110110001101111"))

// outputs "Hello"
```

#### An example **Encoding** text to binary numbers
```js
const test = require("decode-encode-binary");
console.log(test.encode("Hello"))

// outputs "0100100001100101011011000110110001101111"
```

#### An example using **Auto Detection**
```js
const test = require("decode-encode-binary");

console.log(test.auto("Hi"))
// outputs 0100100001101001

console.log(test.auto("0100100001101001"))  
// outputs "Hi"

```
------

#### Making whitespace between every letter in binary
```js
const test = require("decode-encode-binary");
console.log(test.encode("Hi", true))

// outputs "01001000 01101001"

/*  Auto detection support  */
console.log(test.auto("Hi", true))

// outputs "01001000 01101001"
```

[![Try on Runkit](https://img.shields.io/badge/-Try%20on%20Runkit-red?style=for-the-badge)](https://npm.runkit.com/decode-encode-binary)
[![Star On GitHub](https://img.shields.io/badge/-Star%20on%20Github%20⭐-yellow?style=for-the-badge)](https://github.com/TheChickenNagget/decode-encode-binary/stargazers)
[![Fork On GitHub](https://img.shields.io/badge/-Fork%20on%20Github%20🔨-green?style=for-the-badge)](https://github.com/TheChickenNagget/decode-encode-binary/fork)
![Line](https://github.com/TheChickenNagget/assets/raw/master/images/line.png)

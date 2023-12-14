# decode-encode-binary
### A Module/CLI to encode & decode binary numbers

![GitHub repo size](https://img.shields.io/github/repo-size/TheChickenNagget/decode-encode-binary?color=dgreen&label=Package%20Size&logo=github)
![Total Downloads](https://badgen.net/npm/dt/decode-encode-binary)
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
$ > Enter your input (Binary/Text)
$ > Hi
$ 0100100001101001
```
```shell 
$ decenc
$ > Enter your input (Binary/Text)
$ > 0100100001101001
$ Hi
```
------

## Examples
#### An example of **decoding** text from binary numbers

```js
const test = require("decode-encode-binary");
test.decode("0100100001100101011011000110110001101111");

// output: "Hello"
```

#### An example of **encoding** text to binary numbers
```js
const test = require("decode-encode-binary");
test.encode("Hello");

// output: "0100100001100101011011000110110001101111"
```
- A binary letter padding can be used by setting boolean as the second parameter
```js
const test = require("decode-encode-binary");
test.encode("Hi", true);

// output: "01001000 01101001"
```

#### An example of using `determine`
```js
const test = require("decode-encode-binary");

test.determine("Hi");
// output: 0100100001101001

test.determine("0100100001101001");
// output: "Hi"
```

[![Try on Runkit](https://img.shields.io/badge/-Try%20on%20Runkit-red?style=for-the-badge)](https://npm.runkit.com/decode-encode-binary)
[![Star On GitHub](https://img.shields.io/badge/-Star%20on%20Github%20⭐-yellow?style=for-the-badge)](https://github.com/TheChickenNagget/decode-encode-binary/stargazers)
[![Fork On GitHub](https://img.shields.io/badge/-Fork%20on%20Github%20🔨-green?style=for-the-badge)](https://github.com/TheChickenNagget/decode-encode-binary/fork)
![Line](https://github.com/TheChickenNagget/assets/raw/master/images/line.png)

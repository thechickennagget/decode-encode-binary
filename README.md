# Decode and encode text to binary #
### Node module and CLI to encode, decode and auto-detect binary numbers ### 
[![Build Status](https://travis-ci.org/TheChickenNagget/decode-encode-binary.svg?branch=master)](https://travis-ci.org/TheChickenNagget/decode-encode-binary)
![GitHub repo size](https://img.shields.io/github/repo-size/TheChickenNagget/decode-encode-binary?color=dgreen&label=Package%20Size&logo=github)
[![Total Downloads](https://badgen.net/npm/dt/decode-encode-binary)](https://www.npmjs.com/package/decode-encode-binary)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/decode-encode-binary)
![Line](https://github.com/TheChickenNagget/assets/raw/master/images/line.png) 
## Installation ##
##### Using [npm](https://www.npmjs.com/package/decode-encode-binary) #####
```shell
$ npm install decode-encode-binary
```
##### Using [Yarn](https://yarnpkg.com/en/package/decode-encode-binary) #####
```shell
$ yarn add decode-encode-binary
```
------
## Using in Terminal ## 
- Use `encdec` & `decenc`, You can use both
- Using in Terminal/Console Requires To Have package installed with `--global` Tag
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
## Examples ##
#### An example decoding text from binary numbers using `decode()` function ####
------
```js
const test = require("decode-encode-binary")
console.log(test.decode("0110100001100101011011000110110001101111001000000111011101101111011100100110110001100100"))

// outputs "hello world"
```
------
#### Example encoding text to binary numbers using `encode()` function ####
```js
const test = require("decode-encode-binary")
console.log(test.encode("Hello world!"))

// outputs "01101000011001010110110001101100011011110111011101101111011100100110110001100100"
 ```

#### Example using Auto Detecting function using `auto()` ####
```js
const test = require("decode-encode-binary")

console.log(test.auto("Hi"))
// outputs 0100100001101001

console.log(test.auto("0100100001101001"))  
// outputs "Hi"

```
------
#### Making space between every letter in binary ####
```js
const test = require("decode-encode-binary")
console.log(test.encode("Hi", true))

// outputs "01001000 01101001"

/*  Auto detection support */

console.log(test.auto("Hi", true))
// outputs "01001000 01101001"
```
[![Create New Issue](https://img.shields.io/badge/-Create%20Issue-red?style=for-the-badge)](https://github.com/TheChickenNagget/decode-encode-binary/issues/new)
[![Fork On GitHub](https://img.shields.io/badge/-Fork%20on%20Github-orange?style=for-the-badge)](https://github.com/TheChickenNagget/decode-encode-binary/fork)
[![Star On GitHub](https://img.shields.io/badge/-Star%20on%20Github-yellow?style=for-the-badge)](https://github.com/TheChickenNagget/decode-encode-binary/stargazers)
[![Try on Runkit](https://img.shields.io/badge/-Try%20on%20Runkit-green?style=for-the-badge)](https://npm.runkit.com/decode-encode-binary)
![Line](https://github.com/TheChickenNagget/assets/raw/master/images/line.png)

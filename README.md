# Decode and encode text to binary #
### Node module and CLI to encode, decode and auto-detect binary numbers ### 
[![Build Status](https://travis-ci.org/TheChickenNagget/decode-encode-binary.svg?branch=master)](https://travis-ci.org/TheChickenNagget/decode-encode-binary)
[![install size](https://packagephobia.now.sh/badge?p=decode-encode-binary)](https://packagephobia.now.sh/result?p=decode-encode-binary)
[![Total Downloads](https://badgen.net/npm/dt/decode-encode-binary)](https://www.npmjs.com/package/decode-encode-binary)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f94a6e8d8fc448e8b34eb4937144446d)](https://www.codacy.com/manual/chickennagget14/decode-encode-binary?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=TheChickenNagget/decode-encode-binary&amp;utm_campaign=Badge_Grade) 
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/decode-encode-binary)
![Line](https://github.com/TheChickenNagget/assets/raw/master/images/line.png) 
> **:warning: Minor [API Changes](https://github.com/TheChickenNagget/decode-encode-binary/blob/master/CHANGELOG.md) were made in version 2.0.0!**
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
- This is a Interactive prompt, Not a command
- Use `encdec` or `decenc`, Both have same Functionallity
- Use in Terminal uses `auto`-matic method  
- Using in Terminal/Console Requires To Have package installed with `--global` Tag
```shell
$ encdec
$ > Enter your Input (Binary or Text)
$ > ay
$ 001000000110000101111001
``` 
```shell
$ decenc
$ > Enter your Input (Binary or Text)
$ > 001000000110000101111001
$ ay
```
## Examples ##
### An example decoding text from binary numbers ###
------
```js
const test = require("decode-encode-binary")
console.log(test.decode("0110100001100101011011000110110001101111001000000111011101101111011100100110110001100100"))

// outputs "hello world"
```
------
### Example encoding text to binary numbers ###
```js
const test = require("decode-encode-binary")
console.log(test.encode("Hello world!"))

// outputs "01101000011001010110110001101100011011110111011101101111011100100110110001100100"
 ```

### Example using Auto Detecting function ###
```js
const test = require("decode-encode-binary")

console.log(test.auto("ok"))
// outputs 0110111101101011

console.log(test.auto("01101111 01101011"))  
// outputs "ok"

```
------
## Other Examples ##
### Making spaces between every letter in binary ###
##### ( Only Decoding/Encoding Works With This Feature ) #####
```js
const test = require("decode-encode-binary")
console.log(test.encode("ay", true))

// outputs "01100001 01111001"


/*  Auto detection support */

console.log(test.auto("ay", true))
// outputs "01100001 01111001" too
```

## Browser Support ##
[![Visit Releases](https://img.shields.io/badge/Visit_Releases-grey?style=for-the-badge)](https://github.com/TheChickenNagget/decode-encode-binary/releases)
[![Download Script.js](https://img.shields.io/badge/Download_Script.js-grey?style=for-the-badge)](https://github.com/TheChickenNagget/decode-encode-binary/releases/download/latest-browser/decode-encode.js)
------
[![Create New Issue](https://img.shields.io/badge/-Create%20Issue-red?style=for-the-badge)](https://github.com/TheChickenNagget/decode-encode-binary/issues/new)
[![Fork On GitHub](https://img.shields.io/badge/-Fork%20on%20Github-orange?style=for-the-badge)](https://github.com/TheChickenNagget/decode-encode-binary/fork)
[![Star On GitHub](https://img.shields.io/badge/-Star%20on%20Github-yellow?style=for-the-badge)](https://github.com/TheChickenNagget/decode-encode-binary/stargazers)
[![Try on Runkit](https://img.shields.io/badge/-Try%20on%20Runkit-green?style=for-the-badge)](https://npm.runkit.com/decode-encode-binary)
![Line](https://github.com/TheChickenNagget/assets/raw/master/images/line.png)

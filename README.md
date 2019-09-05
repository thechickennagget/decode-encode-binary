# Decode and encode text to binary
### Node module and CLI to encode, decode and auto-detect binary numbers
[![Build Status](https://travis-ci.org/TheChickenNagget/encode-decode-binary-text.svg?branch=master)](https://travis-ci.org/TheChickenNagget/encode-decode-binary-text)
[![install size](https://packagephobia.now.sh/badge?p=decode-and-encode-binary-text)](https://packagephobia.now.sh/result?p=decode-and-encode-binary-text)
[![Total Downloads](https://badgen.net/npm/dt/decode-and-encode-binary-text)](https://www.npmjs.com/package/decode-and-encode-binary-text)
[![GitHub last commit](https://img.shields.io/github/last-commit/ChickenNaggetGithub/encode-decode-binary-text?logo=GitHub)](https://github.com/TheChickenNagget/encode-decode-binary-text/)
[![GitHub stars](https://img.shields.io/github/stars/TheChickenNagget/encode-decode-binary-text?logo=GitHub)](https://github.com/TheChickenNagget/encode-decode-binary-text/)
[![Discord](https://discordapp.com/api/guilds/610476577632944159/embed.png)](https://discord.gg/CFw8BMJ)

------
## Installation
##### using [npm:](https://www.npmjs.com/package/decode-and-encode-binary-text)
```
$ npm install decode-and-encode-binary-text
```
##### using [yarn:](https://yarnpkg.com/en/package/decode-and-encode-binary-text)
```
$ yarn add decode-and-encode-binary-text
```
------
## Using in Terminal:
#### you can use this by using "enc" or "dec" prefix, here's example:
```
$ enc encode ay
$ 001000000110000101111001
```
#
## Examples
### An example decoding text from binary numbers
------
```js
const test = require("decode-and-encode-binary-text")
console.log(test.decode("0110100001100101011011000110110001101111001000000111011101101111011100100110110001100100"))

// outputs "hello world"
```
#### you can use ot with spaces or without spaces, they work same
------

### Example encoding text to binary numbers
```js
const test = require("decode-and-encode-binary-text")
console.log(test.encode("Hello world!"))

// outputs "01101000011001010110110001101100011011110111011101101111011100100110110001100100"
 ```

### Example using Auto Detecting function
```js
const test = require("decode-and-encode-binary-text")

console.log(test.auto("ok"))
// outputs 0110111101101011

console.log(test.auto("01101111 01101011"))  
// outputs "ok"

```

### Other Examples
-----
### Making spaces between every letter in binary
##### ( only in encoding & encoding in auto detect )
```js
const test = require("decode-and-encode-binary-text")
console.log(test.encode("ay", true))

// outputs "01100001 01111001"


/*  Auto detection support */

console.log(test.auto("ay", true))
// outputs "01100001 01111001" too
```

## Browser Support
##### You can use this module in browser too..
##### First you need to **__[download "browser_latest.js" file from this github folder](https://github.com/TheChickenNagget/assets/tree/master/encode-decode-npm)__** and put it to your folder, and then put this to your HTML file
```html
<script src="browser_lastest.js"></script>
```
##### Now you can use encode() , decode() and auto() in browser in next <script></script> Tag
------
 > if you need help [open new issue in github repository](https://github.com/ChickenNaggetGitHub/encode-decode-binary-text/issues/new)

# isbinary-num 
### Simple module to detect if number is binary number
[![install size](https://packagephobia.now.sh/badge?p=isbinary-num)](https://packagephobia.now.sh/result?p=isbinary-num)
#
------
## Usage
You can simply use .isBinary("") Function, here's some example
```js
const test = require("isbinary-num")
test.isBinary("00000010101011001011110f0010110100");
// outputs: true

test.isBinary("2155665639569985463546587444444445");
//outputs: false
```

## Terminal Usage
This module can be used in terminal if you wan't it for some reason
**Prefix is "isbin"**, for example:
```shell
$ isbin 0100100001101001
$ true
```
And
```shell
$ isbin 564684136548blah77741
$ false
```
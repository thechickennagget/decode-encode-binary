## Decode and encode text to binary 

### An example decoding text to binary numbers
```
const test = require("decode-and-encode-binary-text")
console.log(test.decode("0110100001100101011011000110110001101111001000000111011101101111011100100110110001100100"))

// outputs "hello world"
```

### Example encoding text from binary numbers
```
const test = require("decode-and-encode-binary-text")
console.log(test.encode("Hello world!"))

// outputs "01101000 01100101 01101100 01101100 01101111 01110111 01101111 01110010 01101100 01100100"
 ```

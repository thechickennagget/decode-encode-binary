console.log('                                       ');
console.log(require('../src/index.js').encode('hello world'));

console.log('                                       ');
console.log(require('../src/index.js').decode('0110100001100101011011000110110001101111001000000111011101101111011100100110110001100100'));

console.log('                                       ');
console.log(require('../src/index.js').auto('hello world'));

console.log('                                       ');
console.log(require('../src/index.js').auto('0110100001100101011011000110110001101111001000000111011101101111011100100110110001100100'));

console.log('                                       ');
console.log(require('../src/index.js').version());

console.log('                                       ');

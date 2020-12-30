const fs = require("fs");
const colors = require('chalk');
const {execSync} = require("child_process")
const main = require("../src/index.js")

return fs.access(`${process.cwd()}/node_modules`, function(err) {
  if (err && err.code === 'ENOENT') {
  console.log("Installing Development Packages")
   execSync("npm install --only=dev",  {stdio: 'inherit'});
    return runTest();
   }else{ 
  runTest();
 }});


 function runTest(){
console.log(colors.red('-- Decode test --'));
function decodeResult() { return main.decode('01101000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100'); }
if (decodeResult() === 'hello world') {
  console.log(colors.green('[ SUCESS ]'));
  console.log(colors.yellow('------------'));
} else {
  console.log(colors.green('[ FAIL ]'));
  console.log(colors.yellow('------------'));
}
console.log(colors.red('-- Encode test --'));
function encodeResult() { return main.encode('hello world'); }
if (encodeResult() === '0110100001100101011011000110110001101111001000000111011101101111011100100110110001100100') {
  console.log(colors.green('[ SUCESS ]'));
  console.log(colors.yellow('------------'));
} else {
  console.log(colors.green('[ FAIL ]'));
  console.log(colors.yellow('------------'));
}
console.log(colors.red('-- Auto Encoding test --'));
function autoEResult() { return main.auto('hello world'); }
if (autoEResult() === '0110100001100101011011000110110001101111001000000111011101101111011100100110110001100100') {
  console.log(colors.green('[ SUCESS ]'));
  console.log(colors.yellow('------------'));
} else {
  console.log(colors.green('[ FAIL ]'));
  console.log(colors.yellow('------------'));
}

console.log(colors.red('-- Auto Decoding test --'));
function autoDResult() { return main.auto('0110100001100101011011000110110001101111001000000111011101101111011100100110110001100100'); }
if (autoDResult() === 'hello world') {
  console.log(colors.green('[ SUCESS ]'));
  console.log(colors.yellow('------------'));
} else {
  console.log(colors.green('[ FAIL ]'));
  console.log(colors.yellow('------------'));
}

console.log(colors.red('                              '));
console.log(colors.green('-- Running Advanced Tests.. --'));
console.log(colors.red('                              '));
console.log(colors.red('-- Auto Decoding with spaces --'));
function AutoEwSResult() { return main.auto('01101000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100'); }
if (AutoEwSResult() === 'hello world') {
  console.log(colors.green('[ SUCESS ]'));
  console.log(colors.yellow('------------'));
} else {
  console.log(colors.green('[ FAIL ]'));
  console.log(colors.yellow('------------'));
}

console.log(colors.red('-- Auto Decoding with spaces after every number --'));
function AutoEwSEResult() { return main.auto('0 1 1 0 1 0 0 0 0 1 1 0 0 1 0 1 0 1 1 0 1 1 0 0 0 1 1 0 1 1 0 0 0 1 1 0 1 1 1 1 0 0 1 0 0 0 0 0 0 1 1 1 0 1 1 1 0 1 10 1 1 1 1 0 1 1 1 0 0 1 0 0 1 10 1 1 0 0 0 1 1 0 0 1 0 0'); }
if (AutoEwSEResult() === 'hello world') {
  console.log(colors.green('[ SUCESS ]'));
  console.log(colors.yellow('------------'));
} else {
  console.log(colors.green('[ FAIL ]'));
  console.log(colors.yellow('------------'));
}}
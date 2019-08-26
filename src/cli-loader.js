#!/usr/bin/env node
'use strict';
var argv = process.argv.slice(2).toString();
argv = argv.replace(",", " ")

if(!argv){
 console.error(`No Command was provided so here are all commands`)
 console.log(`
  Commands
  - encode ~ Encode provided string to binary
  - decode ~ Decode provided string from binary
  - auto ~ Automatically detects if you wan't decode or encode

  ~~ Example usage at npm package information ~~
 `)
}
try{
if(argv.search("encode") === 0){
argv = argv.replace('encode','');
console.log(require("./index.js").encode(`${argv}`))
process.exit(0)
}

else if(argv.search("decode") === 0){
argv = argv.replace('decode','');
console.log(require("./index.js").decode(`${argv}`))
process.exit(0)
}

else if(argv.search("auto") === 0){
argv = argv.replace('auto','');
console.log(require("./index.js").auto(`${argv}`))
process.exit(0)
}}catch(err){
throw new Error(err)
}

function auto (detect, spacesV) {	
    if (!detect) {
    if (!detect) { throw new Error('No Text to decode / encode was provided');
    } else if (detect === ' ') { throw new Error('Text cannot be empty string');
         } 
      }			 
    if (typeof detect === "number") {
    throw new Error("please add ' ' tags to the binary numbers, for example: test.decode('000101101') instead of the: test.decode(000101101)");
       }				 
    if (/^[01][01\s]*[01]$/.test(detect)) {
        try {
        function toBinary(tobin) {
        tobin = tobin.replace(/\s+/g, '');
        tobin = tobin.match(/.{1,8}/g).join(' ');
        return tobin.split(" ").map(function (elem) {
        return String.fromCharCode(parseInt(elem, 2));
                        }).join("");
        }
        return toBinary(detect).toString();
        } catch (err) {
        if(err.message === "Cannot read property 'join' of null"){
        throw new Error("Text to decode cannot be empty string");}
        throw new Error(err.stack);
    }
        } else {
        if (!detect) {
        throw new Error('No Text to encode was provided');
        } else if (detect === ' ') {
        throw new Error('Text cannot be empty string');
        }
    if (typeof detect === "number") {
    throw new Error("Text to encode must be string instead of the number, for example use encode('4') instead of the encode(4)");
    }
    try{
    function toText(str,spaceSeparatedOctets) {
    function zeroPad(num) {
    return '00000000'.slice(String(num).length) + num;
    }return str.replace(/[\s\S]/g,(str) => {
    str = zeroPad(str.charCodeAt().toString(2));
    if(spacesV === true){
        return !1 === spaceSeparatedOctets ? str : `${str} `;
    }else{
        return !1 === spaceSeparatedOctets ? str : `${str}`;}
                });
                    }
                    return toText(detect).toString();
                
                }catch (err){
                throw new Error(`Error ${err.stack}`);}
        }
}

"use strict";
module.exports = {
/**
 * Decodes a binary code to text
 * @param {string} binary
 * @example 
 * 
 * const test = require("decode-and-encode-binary-text")
 * console.log(test.decode("0100100001100101011011000110110001101111"))
 * // outputs "Hello"
 */
   decode: function (binary) {
      if (!binary) {
        throw new Error('No Text to decode was provided');
      } else if (binary === ' ') {
        throw new Error('Text cannot be empty string');
      }
		
		if (typeof binary === "number") {
throw new Error("please add ' ' tags to the binary numbers, for example: test.decode('000101101') instead of the: test.decode(000101101)");
		}
              try { 
                     function toBinary(tobin){
                     tobin = tobin.replace(/\s+/g,'');
                     tobin = tobin.match(/.{1,8}/g).join(' ');
                         return tobin.split(" ").map(function (elem) {
                         return String.fromCharCode(parseInt(elem, 2));
			}).join("");
}
		return toBinary(binary).toString();
} catch (err) {
		if(err.message === "Cannot read property 'join' of null"){
		throw new Error("Text to decode cannot be empty string");}
		throw new Error(err.stack);}
	},
	
/**
 * Encodes a text to binary
 * @param {string} text
 * @param {boolean} spaces
 * @example
 * var test = require("decode-and-encode-binary-text")
 * console.log(test.encode("Hello"))
 * // outputs "0100100001100101011011000110110001101111"
 * 
 * // second example using "spaces"
 * var test = require("decode-and-encode-binary-text")
 * console.log(test.encode("Hello", true))
 * // outputs "01001000 01100101 01101100 01101100 01101111"
 */
	encode: function (text, spaces) {
	if (!text) {
	throw new Error('No Text to encode was provided');
	} else if (text === ' ') {
	throw new Error('Text cannot be empty string');
        }
		
	if (typeof text === "number") {
        throw new Error("Text to encode must be string instead of the number, for example use encode('4') instead of the encode(4)");
       }
     try{
function toText(str,spaceSeparatedOctets) {
function zeroPad(num) {
return '00000000'.slice(String(num).length) + num;
}return str.replace(/[\s\S]/g,(str) => {
          str = zeroPad(str.charCodeAt().toString(2));
          if(spaces === true){
          return !1 === spaceSeparatedOctets ? str : `${str} `;
          }else{
          return !1 === spaceSeparatedOctets ? str : `${str}`;}
          });
        }
        return toText(text).toString();
	
	}catch (err){
	throw new Error(`Error ${err.stack}`);}
   },
	
/**
 * Checks current version of this dependency
 * @example
 * const test = require("decode-and-encode-binary-text")
 * console.log(test.version())
 * // outputs current this dependency version
 */
	version: function () { try {
	return require("./package.json").version;
	} catch (err) {
	throw new Error(err.stack);
	}
    },
	
/**
 * Automatically detect if you want to decode or encode 
 * @param {string} detect
 * @example
 * var test = require("decode-and-encode-binary-text")
 * console.log(test.auto("Hello"))
 * // outputs "0100100001100101011011000110110001101111"
 * 
 * console.log(test.auto("0100100001100101011011000110110001101111"))
 * // outputs "Hello"
 */
auto: function (detect, spacesV) {	
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
	}
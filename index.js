"use strict";
module.exports = {
	decode: function (binary) {
		if (typeof binary === "number") {
			throw new Error("please add ' ' tags to the binary numbers, for example: test.decode('000101101') instead of the: test.decode(000101101)");
		}
		if (typeof binary === "string") {
			if (!binary) {
        throw new Error('No Text to decode was provided');
      } else if (binary === ' ') {
        throw new Error('Text cannot be empty string');
      }
			try {
				function toBinary(tobin) {
					tobin = tobin.replace(/\s+/g, '');
					tobin = tobin.match(/.{1,8}/g).join(' ');
					return tobin.split(" ").map(function (elem) {
						return String.fromCharCode(parseInt(elem, 2));
					}).join("");
				}
				return toBinary(binary).toString();
			} catch (err) {
				throw new Error(err.stack);
			}
		}
	},
	encode: function (text, spaces) {
		if (!text) {
			throw new Error('No Text to encode was provided');
		} else if (text === ' ') {
			throw new Error('Text cannot be empty string');
		}

			try{ 
			 function toText(str,spaceSeparatedOctets) {
				function zeroPad(num) {
					return '00000000'.slice(String(num).length) + num;
				}
				return str.replace(/[\s\S]/g, (str) => {
          str = zeroPad(str.charCodeAt().toString(2));
          if(spaces === true){
          return !1 === spaceSeparatedOctets ? str : `${str} `;
          }else{
          return !1 === spaceSeparatedOctets ? str : `${str}`;}
          });
      }
	  return toText(text).toString();
	}catch (err){
	throw new Error(`${err.stack}`);
	   }
	},
	version: function () {
		try {
			return require("./package.json").version;
		} catch (err) {
			throw new Error(err.stack);
		}
	},
	auto: function (detect) {	if (!detect) {
if (!detect) { throw new Error('No Text to decode / encode was provided');
} else if (detect === ' ') { throw new Error('Text cannot be empty string'); } }

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
				throw new Error(err.stack);
			}
		} else {
			if (!detect) {
				throw new Error('No Text to encode was provided');
			} else if (detect === ' ') {
				throw new Error('Text cannot be empty string');
			}
			try {
				function toText(str,spaceSeparatedOctets) {
					function zeroPad(num) {
						return '00000000'.slice(String(num).length) + num;
	                }
					return str.replace(/[\s\S]/g, (str) => {
						str = zeroPad(str.charCodeAt().toString(2));
						return !1 === spaceSeparatedOctets ? str : `${str} `;
					});
				}
				return toText(detect).toString();
			} catch (err) {
				throw new Error(err.stack);
			}
		}
	}
	
};

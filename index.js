"use strict";
require("./index.js");
var version = require("./package.json").version;
module.exports = {
  decode: function(binary){
  if (!binary) { return 'No numbers to decode was provided'; }
  else if (binary === ' ') { 'Text cannot be empty string'; }; exports.done = false;
  try{ function toBinary(tobin) { tobin = tobin.replace(/\s+/g, ''); tobin = tobin.match(/.{1,8}/g).join(' ');
  return tobin.split(" ").map(function (elem) { return String.fromCharCode(parseInt(elem, 2)); }).join(""); }; exports.done = true;
  return toBinary(binary); }catch(err){ console.error(err.stack); };
  },

encode: function(text){
  if (!text) { return 'No text to encode was provided'; }
  else if (text === ' ') { return 'Text cannot be empty string'; }; exports.done = false;
  try{ function toText(str, spaceSeparatedOctets) { function zeroPad(num) { return '00000000'.slice(String(num).length) + num; }
  return str.replace(/[\s\S]/g, (str) => { str = zeroPad(str.charCodeAt().toString(2));
  return !1 === spaceSeparatedOctets ? str : `${str} `; }); }; exports.done = true;
  return toText(text); }catch(err){ console.error(err.stack); };
  },
  
version: function(){
 return version;
}
};
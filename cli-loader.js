#!/usr/bin/env node
"use strict";
var argv = process.argv.slice(2).toString();
argv = argv.replace(",", "");
try{
if(argv.search("encode")===0){argv=argv.replace("encode","");console.log(require("./index.js").encode(argv.toString()));process.exit(0);}
if(argv.search("decode")===0){argv=argv.replace("decode","");if(argv === null ||  /^\s*$/.test(argv)){return console.error("> No Text to decode was provided");} console.log(require("./index.js").decode(argv.toString()));process.exit(0);}
if(!argv){
console.log("                Commands");
console.log("- encode ~ Encode provided string to binary");
console.log("- decode ~ Decode provided string from binary");
}
}catch(e){throw new Error(e);}

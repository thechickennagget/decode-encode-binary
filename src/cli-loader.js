#!/usr/bin/env node
'use strict';
require("v8-compile-cache");
var argv = process.argv.slice(2).toString();
argv = argv.replace(",", "")
try{
if(argv.search("encode")===0){argv=argv.replace('encode','');console.log(require("./index.js").encode(`${argv}`));process.exit(0);}
if(argv.search("decode")===0){argv=argv.replace('decode','');if(argv === null ||  /^\s*$/.test(argv)){return console.error("> No Text to decode was provided");} console.log(require("./index.js").decode(`${argv}`));process.exit(0);}
if(!argv){console.log(`
                Commands
- encode ~ Encode provided string to binary
- decode ~ Decode provided string from binary`);}
}catch(e){throw new Error(e);}
#!/usr/bin/env node
'use strict';
var argv = process.argv.slice(2).toString();
argv = argv.replace(",", "")

if(!argv){console.log(`                   Commands
- encode ~ Encode provided string to binary
- decode ~ Decode provided string from binary`);}
try{
if(argv.search("encode")===0){argv=argv.replace('encode','');console.log(require("./index.js").encode(`${argv}`));process.exit(0);}
if(argv.search("decode")===0){argv=argv.replace('decode','');console.log(require("./index.js").decode(`${argv}`));process.exit(0);} 
}catch(err){throw new Error(err);}
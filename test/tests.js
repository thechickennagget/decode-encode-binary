/*           
 ___       ___     ____     ______     ______        __      _    _____      __      _      _____   
(  (       )  )   (    )   (   __ \   (   __ \      /  \    / )  (_   _)    /  \    / )    / ___ \  
 \  \  _  /  /    / /\ \    ) (__) )   ) (__) )    / /\ \  / /     | |     / /\ \  / /    / /   \_) 
  \  \/ \/  /    ( (__) )  (    __/   (    __/     ) ) ) ) ) )     | |     ) ) ) ) ) )   ( (  ____  
   )   _   (      )    (    ) \ \  _   ) \ \  _   ( ( ( ( ( (      | |    ( ( ( ( ( (    ( ( (__  ) 
   \  ( )  /     /  /\  \  ( ( \ \_)) ( ( \ \_))  / /  \ \/ /     _| |__  / /  \ \/ /     \ \__/ /  
    \_/ \_/     /__(  )__\  )_) \__/   )_) \__/  (_/    \__/     /_____( (_/    \__/       \____/   
                                                                                                    
-- RUN "npm i --dev-only" BEFORE STARTING THIS --

- This is test file, its used for testing functions after some Function Update
- This is supposed to be used by developers but you can use it too if you wan't
- decodeTest - tests decode function with provided text
- encodeTest - tests encode function with provided text
- autoTest - tests auto-detect function with provided text
 ~ remove //'s when testing function ~
*/
"use strict";
const colors = require("chalk");
   console.log(colors.red("-- Decode test --"))
   function decodeResult(){ return require(".././src/index.js").decode("01101000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100")}
   if(decodeResult() === "hello world"){ 
    console.log(colors.green(`[ SUCESS ]`)) 
    console.log(colors.yellow(`------------`))
   }else{
    console.log(colors.green(`[ FAIL ]`)) 
    console.log(colors.yellow(`------------`))
   }
   console.log(colors.red("-- Encode test --"))
  function encodeResult(){ return  require(".././src/index.js").encode("hello world") }
    if(encodeResult() === "0110100001100101011011000110110001101111001000000111011101101111011100100110110001100100"){ 
    console.log(colors.green(`[ SUCESS ]`)) 
    console.log(colors.yellow(`------------`))
   }else{
    console.log(colors.green(`[ FAIL ]`)) 
    console.log(colors.yellow(`------------`))
   }
   console.log(colors.red("-- Auto Encoding test --"))
   function autoEResult(){ return  require(".././src/index.js").auto("hello world") }
   if(autoEResult() === "0110100001100101011011000110110001101111001000000111011101101111011100100110110001100100"){ 
    console.log(colors.green(`[ SUCESS ]`)) 
    console.log(colors.yellow(`------------`))
   }else{
    console.log(colors.green(`[ FAIL ]`)) 
    console.log(colors.yellow(`------------`))
   }

   console.log(colors.red("-- Auto Decoding test --"))
   function autoDResult(){ return  require(".././src/index.js").auto("0110100001100101011011000110110001101111001000000111011101101111011100100110110001100100") }
   if(autoDResult() === "hello world"){ 
    console.log(colors.green(`[ SUCESS ]`)) 
    console.log(colors.yellow(`------------`))
   }else{
    console.log(colors.green(`[ FAIL ]`)) 
    console.log(colors.yellow(`------------`))
   }

   console.log(colors.red("                              "))
   console.log(colors.green("-- Running Advanced Tests.. --"))
   console.log(colors.red("                              "))
   console.log(colors.red("-- Auto Decoding with spaces --"))
   function AutoEwSResult(){ return require(".././src/index.js").auto("01101000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100")}
   if(AutoEwSResult() === "hello world"){
    console.log(colors.green(`[ SUCESS ]`)) 
    console.log(colors.yellow(`------------`))
   }else{
    console.log(colors.green(`[ FAIL ]`)) 
    console.log(colors.yellow(`------------`))
   }

   console.log(colors.red("-- Auto Decoding with spaces after every number (extreme) --"))
 function AutoEwSExtremeSResult(){ return require(".././src/index.js").auto("0 1 1 0 1 0 0 0 0 1 1 0 0 1 0 1 0 1 1 0 1 1 0 0 0 1 1 0 1 1 0 0 0 1 1 0 1 1 1 1 0 0 1 0 0 0 0 0 0 1 1 1 0 1 1 1 0 1 10 1 1 1 1 0 1 1 1 0 0 1 0 0 1 10 1 1 0 0 0 1 1 0 0 1 0 0")}
 if(AutoEwSExtremeSResult() === "hello world"){  
    console.log(colors.green(`[ SUCESS ]`)) 
    console.log(colors.yellow(`------------`))
   }else{
    console.log(colors.green(`[ FAIL ]`)) 
    console.log(colors.yellow(`------------`))
   }


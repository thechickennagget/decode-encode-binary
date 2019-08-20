/*           
 ___       ___     ____     ______     ______        __      _    _____      __      _      _____   
(  (       )  )   (    )   (   __ \   (   __ \      /  \    / )  (_   _)    /  \    / )    / ___ \  
 \  \  _  /  /    / /\ \    ) (__) )   ) (__) )    / /\ \  / /     | |     / /\ \  / /    / /   \_) 
  \  \/ \/  /    ( (__) )  (    __/   (    __/     ) ) ) ) ) )     | |     ) ) ) ) ) )   ( (  ____  
   )   _   (      )    (    ) \ \  _   ) \ \  _   ( ( ( ( ( (      | |    ( ( ( ( ( (    ( ( (__  ) 
   \  ( )  /     /  /\  \  ( ( \ \_)) ( ( \ \_))  / /  \ \/ /     _| |__  / /  \ \/ /     \ \__/ /  
    \_/ \_/     /__(  )__\  )_) \__/   )_) \__/  (_/    \__/     /_____( (_/    \__/       \____/   
                                                                                                    

- This is test file, its used for testing functions after some Function Update
- This is supposed to be used by developers but you can use it too if you wan't

- decodeTest - tests decode function with provided text
- encodeTest - tests encode function with provided text
- autoTest - tests auto-detect function with provided text

 ~ remove //'s when testing function ~
*/

function decodeTest(text){console.log(require("./index.js").decode(text))}
function encodeTest(text){console.log(require("./index.js").encode(text))}
function autoTest(text){console.log(require("./index.js").auto(text))}
    
   //decodeTest("01101000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100")
   //encodeTest("hello world")
   //autoTest("hello world")
   //autoTest("01101000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100")

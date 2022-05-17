// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  
   function caesar(input, shift, encode = true) {
      if (!shift || shift === 0 || shift< -25 || shift > 25) {
      return false;
      }
    input = input.toLowerCase();
    const result = [];
    if (!encode) {
      shift = -shift;
   }
  for (let i=0; i<input.length; i++) {
      let letter = input.charCodeAt(i);
      if (letter < 97 || letter > 122) {
        result.push(String.fromCharCode(letter))
      } else {
        letter += shift;
        if (letter >= 97 && letter <= 122) result.push(String.fromCharCode(letter));
        if (letter < 97)result.push(String.fromCharCode(123 - ( 97 - letter)));
        if (letter > 122)result.push(String.fromCharCode(96 + (letter - 122)));
      } 
  }
     return result.join("");
   }
                        
    return { caesar,
    };
  })();
  
  module.exports = { caesar: caesarModule.caesar };
  

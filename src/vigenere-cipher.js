const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
   constructor(typeOfMach) {
      this.ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      this.isReverse = typeOfMach;
   }

   encrypt(message, key) {
      // if(message == "undefined" || key == "undefined"){
      //   throw new Error("Ups!");    
      // }   
      let index = 0;
      let encrArr = [];
      encrArr = message.toLowerCase().split('').map(letter => {
            if (/[a-z]/i.test(letter)) {
               let letterNumber = this.ALPHABET.indexOf(letter);
               let keyNumber = this.ALPHABET.indexOf(key[(index % key.length)].toLowerCase());
               index++;
               return this.ALPHABET[(letterNumber + keyNumber) % 26];
            } else {
               return letter;
            }
         }
      ).join('').toUpperCase();      
       return this.isReverse === false ? encrArr.split('').reverse().join('') : encrArr;
   }

   decrypt(message, key) {
         
      let index = 0;
      let decrArr= [];
      decrArr = message.toLowerCase().split('').map(letter => {
            if (/[a-z]/i.test(letter)) {
               let letterNumber = this.ALPHABET.indexOf(letter);
               let keyNumber = this.ALPHABET.indexOf(key[index % key.length].toLowerCase());
               index++;
               return this.ALPHABET[(26 + letterNumber - keyNumber) % 26]
            } else {
               return letter;
            }
         }
      ).join('').toUpperCase();
      return this.isReverse === false ? decrArr.split('').reverse().join('') : decrArr;
   }
}

module.exports = VigenereCipheringMachine;


//encryptМетод принимает 2 параметра: message( stringдля кодирования) и key( string-ключевое слово).
//decryptМетод принимает 2 параметра: encryptedMessage( stringдля декодирования) и key( string-ключевое слово).

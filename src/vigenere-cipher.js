const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }


  encrypt(message, key) {
    let text = message.toUpperCase();
    let fount = key.toUpperCase();
    const textLength = text.length;
    fount = fount.repeat(Math.ceil(textLength / key.length)).split('');
    let total = "";
    for(let i = 0; i < textLength; i++) {
      if(65 <= text.charCodeAt(i) &&  text.charCodeAt(i) < 91) {
        total += String.fromCharCode(((text.charCodeAt(i) + fount[0].charCodeAt(0)) % 26) + 65);
        fount.shift();
      } else {
        total += text.charAt(i);
      }
    }
    if(this.type === false) {
      return total.split('').reverse().join('');
    }
    return total;
  }  
  
  
  decrypt(message, key) {
    let text = message.toUpperCase();
    let fount = key.toUpperCase();
    const messageLength = text.length;
    fount = fount.repeat(Math.ceil(messageLength / key.length)).split('');
    let total = "";
    for(let i = 0; i < messageLength; i++) {
      if(65 <= text.charCodeAt(i) &&  text.charCodeAt(i) < 91) {
        total += String.fromCharCode(((text.charCodeAt(i) + 26 - fount[0].charCodeAt(0)) % 26) + 65);
        fount.shift();
      } else {
        total += text.charAt(i);
      }
    }
    if(this.type === false) {
      return total.split('').reverse().join('');
    }
    return total;
  }
}

module.exports = {
  VigenereCipheringMachine
};

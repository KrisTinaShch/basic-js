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
  constructor(isDirect = true) {
    this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.isDirect = isDirect;
  }

  transformText(text, key, encrypt) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }
    let res = '';
    key = key.toUpperCase().replace(/[^A-Z]/g, '');


    text = text.toUpperCase().replace(/[^A-Z]/g, '');



    for (let i = 0, j = 0; i < text.length; i++) {

      const symhol = text.charAt(i);


      if (this.letters.indexOf(symhol) === -1) {
        res += symhol;
        continue;

      }
      const keySymhol = key.charAt(j % key.length);

      const shift = this.letters.indexOf(keySymhol);

      const symholIndex = this.letters.indexOf(symhol);

      const shiftedIndex = encrypt
        ? (symholIndex + shift) % this.letters.length
        : (symholIndex - shift + this.letters.length) % this.letters.length;
      const shiftedChar = this.letters.charAt(shiftedIndex);
      res += shiftedChar;
      j++;
    }
    return res;
  }

  encrypt(message, key) {
    const encrypt = this.transformText(message, key, true);
    if (this.isDirect) {
      return encrypt;
    } else {
      return encrypt.split('').reverse().join('');
    }
  }

  decrypt(encryptedMessage, key) {
    const decrypt = this.transformText(encryptedMessage, key, false);
    if (this.isDirect) {
      return decrypt;
    } else {
      return decrypt.split('').reverse().join('');
    };
  }
}

module.exports = {
  VigenereCipheringMachine
};

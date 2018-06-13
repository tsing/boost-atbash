export default class Atbash {
  constructor(cipher, constant='abcdefghijklmnopqrstuvwxyz') {
    this.constant = constant;
    this.cipher = cipher;
  }

  encrypt(original) {
    const buffer = []
    for (const char of original) {
      const index = this.constant.indexOf(char);
      if (index == -1) {
        buffer.push(char);
      } else {
        buffer.push(this.cipher[index]);
      }
    }
    return buffer.join('');
  }

  decrypt(encrypted) {
    return new Atbash(this.constant, this.cipher).encrypt(encrypted);
  }
}

import Atbash from './atbash';

const atbash = new Atbash('oephjizkxdawubnytvfglqsrcm');
const encrypted = 'knlfgnb, sj koqj o yvnewju';
const original = atbash.decrypt(encrypted);

console.log(`CONSTANT       = '${atbash.constant}'`);
console.log(`cipher         = '${atbash.cipher}'`);
console.log(`encrypted text = '${encrypted}'`);
console.log(`original text  = '${original}'`);

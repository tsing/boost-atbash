import assert from 'assert';
import Atbash from '../atbash';

describe('Atbash', () => {
  it('should encrypt and decrypt', () => {
    const atbash = new Atbash('zodvqukgwefbyitmrsplhacxnj');
    assert.equal(atbash.encrypt('car'), 'dzs');
    assert.equal(atbash.decrypt('dzs'), 'car');
  });

  it('should support special characters', () => {
    const atbash = new Atbash('xipmuzfkbrlwotjancqgveshdy');
    assert.equal(atbash.encrypt('why so serious?'), 'skd qj qucbjvq?');
    assert.equal(atbash.decrypt('skd qj qucbjvq?'), 'why so serious?');
  });

  it('should decrypt the challenge', () => {
    const atbash = new Atbash('oephjizkxdawubnytvfglqsrcm');
    assert.equal(atbash.decrypt('knlfgnb, sj koqj o yvnewju'),
      'houston, we have a problem');
  });
});

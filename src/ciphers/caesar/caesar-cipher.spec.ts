import {expect} from 'chai';
import {CaesarCipher} from "./caesar-cipher";

describe('Caesar Cipher', () => {
    const englishCaesarCipher = new CaesarCipher();

    describe('when encrypting', () => {
        describe('when using letter "a" as a key', () => {
            it('should always return the same text', () => {
                const openText = 'abcd';
                expect(englishCaesarCipher.encrypt('a', 'a')).to.be.equal('a');
                expect(englishCaesarCipher.encrypt(openText, 'a')).to.be.equal(openText);
            });
        });

        describe('when using different key than letter "a"', () => {
            const openText = 'abcd';
            it('should shift all letters to the right by the number of letters between letter "a" and the key', () => {
                expect(englishCaesarCipher.encrypt(openText, 'b')).to.be.equal('bcde');
            });

            describe('when shifting over the last letter of alphabet', () => {
                it('should cycle back to the beginning of the alphabet', () => {
                    expect(englishCaesarCipher.encrypt('xyz', 'b')).to.be.equal('yza');
                });
            });
        });

        describe('when specifying specific alphabet', () => {
            it('should respect it', () => {
                const simpleCaesarCipher = new CaesarCipher('0123456789'.split(''));
                const openText = '12345';
                expect(simpleCaesarCipher.encrypt(openText, '0')).to.be.equal(openText);
                expect(simpleCaesarCipher.encrypt('123', '4')).to.be.equal('567');
                expect(simpleCaesarCipher.encrypt('789', '1')).to.be.equal('890');
            });
        });
    });
});
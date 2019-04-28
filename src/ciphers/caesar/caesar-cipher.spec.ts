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
            it('should shift all letters to the right by the number of letters between letter "a" and the key', () => {
                const openText = 'abcd';
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

        describe('when passing letter that is not from the alphabet', () => {
            it('should keep the letter as is', () => {
                expect(englishCaesarCipher.encrypt('Open text!', 'b')).to.be.equal('Oqfo ufyu!');
            });
        });
    });

    describe('when decrypting', () => {
        describe('when using the letter "a" as a key', () => {
            it('should always return the same text', () => {
                const cipherText = 'abcd';
                expect(englishCaesarCipher.decrypt('a', 'a')).to.be.equal('a');
                expect(englishCaesarCipher.decrypt(cipherText, 'a')).to.be.equal(cipherText);
            });
        });

        describe('when using different key than letter "a"', () => {
            it('should shift all letters to the left by the number of letters between letter "a" and the key', () => {
                const cipherText = 'bcde';
                expect(englishCaesarCipher.decrypt(cipherText, 'b')).to.be.equal('abcd');
            });

            describe('when shifting over the last letter of alphabet', () => {
                it('should cycle back to the beginning of the alphabet', () => {
                    expect(englishCaesarCipher.decrypt('abc', 'b')).to.be.equal('zab');
                });
            });
        });

        describe('when specifying specific alphabet', () => {
            it('should respect it', () => {
                const simpleCaesarCipher = new CaesarCipher('0123456789'.split(''));
                expect(simpleCaesarCipher.decrypt('12345', '0')).to.be.equal('12345');
                expect(simpleCaesarCipher.decrypt('567', '4')).to.be.equal('123');
                expect(simpleCaesarCipher.decrypt('890', '1')).to.be.equal('789');
            });
        });

        describe('when passing letter that is not from the alphabet', () => {
            it('should keep the letter as is', () => {
                expect(englishCaesarCipher.decrypt('Oqfo ufyu!', 'b')).to.be.equal('Open text!');
            });
        });
    });

    describe('integration tests', () => {
        it('should give the same text when encrypting and decrypting with the same key', () => {
            const key = 'f';
            const openText = 'opentext';

            expect(englishCaesarCipher.decrypt(englishCaesarCipher.encrypt(openText, key), key)).to.be.equal(openText);
        });
    });
});
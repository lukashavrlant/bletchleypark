import {CaesarBruteForceAttack, CaesarBruteForceAttackResults} from "./caesar-brute-force-attack";
import {expect} from 'chai';
import {CaesarCipher} from "./caesar-cipher";
import {normalize} from "../../tools/text/normalize";

describe('when trying to break the Caesar cipher using the brute force method', () => {
    const caesarCipher = new CaesarCipher();
    const breaker = new CaesarBruteForceAttack();

    describe('when passing empty string', () => {
        it('should return empty string', () => {
            const results: CaesarBruteForceAttackResults = breaker.break('');
            expect(results[0].openText).to.be.equal('');
        });
    });

    describe('when passing non empty long-enough string', () => {
        it('should crack the cipher and return original open text', () => {
            const openTexts = [
                normalize('Who controls the past controls the future. Who controls the present controls the past'),
                normalize('War is peace. Freedom is slavery. Ignorance is strength.'),
                normalize('The best books... are those that tell you what you know already.'),
                normalize('Doublethink means the power of holding two contradictory beliefs in one\'s mind simultaneously, and accepting both of them.')
            ];

            for (const openText of openTexts) {
                const key = openText[0];
                const cipherText = caesarCipher.encrypt(openText, key);
                const results: CaesarBruteForceAttackResults = breaker.break(cipherText);

                expect(results[0].key).to.be.equal(key);
                expect(results[0].openText).to.be.equal(openText);
            }
        });
    });
});

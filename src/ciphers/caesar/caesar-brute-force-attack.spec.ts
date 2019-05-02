import {CaesarBruteForceAttack, CaesarBruteForceAttackResults} from "./caesar-brute-force-attack";
import {expect} from 'chai';

describe('when trying to break the Caesar cipher using the brute force method', () => {
    describe('when passing empty string', () => {
        it('should return empty string', () => {
            const breaker = new CaesarBruteForceAttack();
            const results: CaesarBruteForceAttackResults = breaker.break('');
            expect(results[0].key).to.be.equal('a');
            expect(results[0].openText).to.be.equal('');
            expect(results[0].probability).to.be.equal(1);
        });
    });
});
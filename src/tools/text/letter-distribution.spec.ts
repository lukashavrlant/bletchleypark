import {expect} from 'chai';
import {letterDistribution} from "./letter-distribution";
import {fillWithZeros} from "./util";

describe('when asked to get letter distribution', () => {
    describe('for empty string', () => {
        it('should return just zeros', () => {
            expect(letterDistribution('')).to.be.deep.equal(fillWithZeros({}));
        });
    });

    describe('for non-empty string', () => {
        it('should return relative distributon of letters in given text', () => {
            expect(letterDistribution('abcc')).to.be.deep.equal(fillWithZeros({a: 0.25, b: 0.25, c: 0.5}));
            expect(letterDistribution('aaaa')).to.be.deep.equal(fillWithZeros({a: 1}));
        });
    });
});
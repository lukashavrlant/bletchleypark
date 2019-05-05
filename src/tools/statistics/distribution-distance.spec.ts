import {expect} from 'chai';
import {DistributionDistance} from "./distribution-distance";

describe('when computing distribution distance', () => {
    describe('given empty distribution', () => {
        it('should return zero distance', () => {
            const di = new DistributionDistance();
            const result = di.getDistance({}, {});
            expect(result).to.be.equal(0);
        });
    });

    describe('given the same distribution', () => {
        it('should return zero distance', () => {
            const di = new DistributionDistance();
            const result = di.getDistance({a: 1}, {a: 1});
            expect(result).to.be.equal(0);
        });
    });

    describe('given different distribution', () => {
        it('should return asda distance', () => {
            const di = new DistributionDistance();
            const result = di.getDistance({a: 1, b: 0}, {a: 0.5, b: 0.5});
            expect(result).to.be.equal(0.5);
        });
    });
});
import {expect} from 'chai';
import {mapValues, values} from "./object-util";

describe('when mapping values of an object', () => {
    describe('when passing empty object', () => {
        it('should return empty object', () => {
            expect(mapValues({}, () => {})).to.be.deep.equal({});
        });

        it('should return new object instance', () => {
            const inputObject = {};
            const result = mapValues(inputObject, () => {});
            expect(inputObject).to.not.be.equal(result);
        });
    });

    describe('when passing non-empty object', () => {
        it('should map values according to given function', () => {
            const inputObj = {a: 1, b: 2, c: 3};
            const result = mapValues(inputObj, n => n * n);
            expect(result).to.be.deep.equal({a: 1, b: 4, c: 9});
        });

        it('should not modify passed object', () => {
            const inputObj = {a: 1, b: 2, c: 3};
            mapValues(inputObj, n => n * n);
            expect(inputObj).to.be.deep.equal({a: 1, b: 2, c: 3});
        });
    });
});

describe('when getting values from object', () => {
    it('should return values from object', () => {
        expect(values({})).to.be.deep.equal([]);
        expect(values({a: 1, b: 'b'})).to.be.deep.equal([1, 'b']);
    });
});
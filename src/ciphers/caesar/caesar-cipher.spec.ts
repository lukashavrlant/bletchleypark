import {expect} from 'chai';
import {CaesarCipher} from "./caesar-cipher";

describe('CaesarCipher', () => {
    it('exists', () => {
        expect(new CaesarCipher()).to.be.an('object');
    });
});
import {expect} from 'chai';
import {normalize} from "./normalize";

describe('normalize', () => {
    describe('when passing string containing upper case', () => {
        it('should convert it to lower case', () => {
            expect(normalize('StarTrek')).to.be.equal('startrek');
        });
    });

    describe('when passing characters different that letters', () => {
        it('should remove them', () => {
            expect(normalize('star-trek!')).to.equal('startrek');
        });
    });
});

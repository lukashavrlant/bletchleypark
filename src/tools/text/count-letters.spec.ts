import {expect} from 'chai';
import {countLetters} from "./count-letters";
import {Letter} from "./interfaces";
import {fillWithZeros} from "./util";

describe('when counting letters', () => {
    describe('in empty string', () => {
        it('should mark each letter has occurred in string zero times', () => {
            givenText('').expectCounter({});
        });
    });

    describe('in non-empty string', () => {
        it('should count all letters properly', () => {
            givenText('a').expectCounter({a: 1});
            givenText('aaa').expectCounter({a: 3});
            givenText('aaabbb').expectCounter({a: 3, b: 3});
            givenText('qwe').expectCounter({q: 1, w: 1, e: 1});
        });
    });

    function givenText(inputText: string) {
        return {
            expectCounter(counter: Record<Letter, number>) {
                expect(countLetters(inputText), `expected to correctly count letter in ${inputText}`).to.be.deep.equal(fillWithZeros(counter));
            }
        }
    }
});
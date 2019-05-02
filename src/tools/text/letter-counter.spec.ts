import {expect} from 'chai';
import {countLetters} from "./letter-counter";
import {englishAlphabet} from "../constants";
import {Letter} from "./interfaces";

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

    function fillWithZeros(object: Record<Letter, number>): Record<Letter, number> {
        const newObject = {...object};

        englishAlphabet.forEach((letter) => {
            if (!newObject[letter]) {
                newObject[letter] = 0;
            }
        });

        return newObject;
    }
});
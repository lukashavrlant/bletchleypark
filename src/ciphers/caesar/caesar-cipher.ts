import {englishAlphabet} from "../../tools/constants";

export class CaesarCipher {
    public constructor(private alphabet: ReadonlyArray<string> = englishAlphabet) {

    }

    public encrypt(openText: string, key: string): string {
        const distance = this.getDistance(this.alphabet, key);
        return this.shiftLetters(openText, distance);
    }

    public decrypt(cipherText: string, key: string): string {
        const distance = this.getDistance(this.alphabet, key);
        return this.shiftLetters(cipherText, -distance);
    }

    private shiftLetters(text: string, shift: number): string {
        let shiftedText = '';

        for (const letter of text) {
            shiftedText += this.shiftLetter(letter, shift);
        }

        return shiftedText;
    }

    private shiftLetter(letter: string, shift: number): string {
        const indexInAlphabet = this.findLetterInAlphabet(letter);

        if (indexInAlphabet !== -1) {
            return this.shiftLetterToRight(indexInAlphabet, shift);
        } else {
            return letter;
        }
    }

    private shiftLetterToRight(indexInAlphabet: number, shift: number): string {
        const cipherIndex = (indexInAlphabet + shift) + this.alphabet.length;
        const normalizedCipherIndex = cipherIndex % this.alphabet.length;
        return this.alphabet[normalizedCipherIndex];
    }

    private findLetterInAlphabet(letter: string): number {
        return this.alphabet.findIndex(l => l === letter);
    }

    private getDistance(alphabet: ReadonlyArray<string>, key: string): number {
        return alphabet.findIndex((letter) => letter === key);
    }
}


const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

export class CaesarCipher {
    public constructor(private alphabet: ReadonlyArray<string> = englishAlphabet) {

    }

    public encrypt(openText: string, key: string): string {
        const shift = this.getDistance(this.alphabet, key);
        let cipherText = '';

        for (const letter of openText) {
            const indexInAlphabet = this.findLetterInAlphabet(letter);
            if (indexInAlphabet !== -1) {
                cipherText += this.shiftLetterToRight(indexInAlphabet, shift);
            } else {
                cipherText += letter;
            }
        }

        return cipherText;
    }
    public decrypt(cipherText: string, key: string): string {
        const distance = this.getDistance(this.alphabet, key);
        let openText = '';

        for (const letter of cipherText) {
            const indexInAlphabet = this.findLetterInAlphabet(letter);
            if (indexInAlphabet !== -1) {
                openText += this.shiftLetterToLeft(indexInAlphabet, distance);
            } else {
                openText += letter;
            }
        }

        return openText;
    }

    private shiftLetterToLeft(indexInAlphabet: number, shift: number): string {
        const cipherIndex = (indexInAlphabet - shift) + this.alphabet.length;
        const normalizedCipherIndex = cipherIndex % this.alphabet.length;
        return this.alphabet[normalizedCipherIndex];
    }

    private shiftLetterToRight(indexInAlphabet: number, shift: number): string {
        const cipherIndex = (indexInAlphabet + shift);
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


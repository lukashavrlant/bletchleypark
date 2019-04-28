const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

export class CaesarCipher {
    public constructor(private alphabet: ReadonlyArray<string> = englishAlphabet) {

    }

    public encrypt(openText: string, key: string): string {
        const distance = this.findDistance(this.alphabet, key);
        let cipherText = '';

        for (const letter of openText) {
            const indexInAlphabet = this.alphabet.findIndex(l => l === letter);
            if (indexInAlphabet !== -1) {
                const cipherIndex = (indexInAlphabet + distance);
                const normalizedCipherIndex = cipherIndex % this.alphabet.length;
                cipherText += this.alphabet[normalizedCipherIndex];
            } else {
                cipherText += letter;
            }
        }

        return cipherText;
    }

    public decrypt(cipherText: string, key: string): string {
        const distance = this.findDistance(this.alphabet, key);
        let openText = '';

        for (const letter of cipherText) {
            const indexInAlphabet = this.alphabet.findIndex(l => l === letter);
            if (indexInAlphabet !== -1) {
                const cipherIndex = (indexInAlphabet - distance) + this.alphabet.length;
                const normalizedCipherIndex = cipherIndex % this.alphabet.length;
                openText += this.alphabet[normalizedCipherIndex];
            } else {
                openText += letter;
            }
        }

        return openText;
    }

    private findDistance(alphabet: ReadonlyArray<string>, key: string): number {
        return alphabet.findIndex((letter) => letter === key);
    }
}


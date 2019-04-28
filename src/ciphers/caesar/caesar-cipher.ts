const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

export class CaesarCipher {
    public constructor(private alphabet: ReadonlyArray<string> = englishAlphabet) {

    }

    public encrypt(openText: string, key: string): string {
        const distance = this.findDistance(this.alphabet, key);
        let cipherText = '';

        for (const letter of openText) {
            const cipherIndex = (this.alphabet.findIndex(l => l === letter) + distance);
            const normalizedCipherIndex = cipherIndex % this.alphabet.length;
            cipherText += this.alphabet[normalizedCipherIndex];
        }

        return cipherText;
    }

    private findDistance(alphabet: ReadonlyArray<string>, key: string): number {
        return alphabet.findIndex((letter) => letter === key);
    }
}


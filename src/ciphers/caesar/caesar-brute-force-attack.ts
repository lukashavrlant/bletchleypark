export interface CaesarBruteForceAttackResult {
    openText: string;
    key: string;
    probability: number;
}

export type CaesarBruteForceAttackResults = ReadonlyArray<CaesarBruteForceAttackResult>;

export class CaesarBruteForceAttack {
    public break(cipherText: string): CaesarBruteForceAttackResults {
        return [{
            probability: 1,
            key: 'a',
            openText: cipherText
        }];
    }
}

import {DistributionDistance} from "../../tools/statistics/distribution-distance";
import {englishAlphabet} from "../../tools/constants";
import {CaesarCipher} from "./caesar-cipher";
import {letterDistribution} from "../../tools/text/letter-distribution";
import {letterFrequency} from "./letter-frequency";

export interface CaesarBruteForceAttackResult {
    openText: string;
    key: string;
    probability: number;
}

export type CaesarBruteForceAttackResults = ReadonlyArray<CaesarBruteForceAttackResult>;

export class CaesarBruteForceAttack {
    private distributionDistance: DistributionDistance = new DistributionDistance();
    private caesarCipher: CaesarCipher = new CaesarCipher();

    public break(cipherText: string): CaesarBruteForceAttackResults {
        return englishAlphabet.map((key) => this.evaluateKey(cipherText, key)).sort(this.byHighestProbability);
    }

    private evaluateKey(cipherText: string, key: string): CaesarBruteForceAttackResult {
        const openText = this.caesarCipher.decrypt(cipherText, key);
        const distribution = letterDistribution(openText);
        const probability = 1 - this.distributionDistance.getDistance(distribution, letterFrequency.en);

        return {
            openText, key, probability
        };
    }

    private byHighestProbability(a: CaesarBruteForceAttackResult, b: CaesarBruteForceAttackResult): number {
        return b.probability - a.probability;
    }
}

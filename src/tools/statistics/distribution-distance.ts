import {Letter} from "../text/interfaces";
import {standardDeviation} from "./deviation";
import {values} from "../object-util";

export type Distribution = Record<Letter, number>;

export class DistributionDistance {
    public getDistance(distribution1: Distribution, distribution2: Distribution): number {
        const diffDistribution = this.diffDistribution(distribution1, distribution2);
        const diffedValues = values(diffDistribution);

        if (Object.keys(diffedValues).length === 0) {
            return 0;
        } else {
            return standardDeviation(diffedValues);
        }
    }

    private diffDistribution(distribution1: Distribution, distribution2: Distribution): Record<Letter, number> {
        const newDisti: Distribution = {};

        Object.keys(distribution1).forEach((key) => {
            newDisti[key] = distribution1[key] - distribution2[key];
        });

        return newDisti;
    }
}


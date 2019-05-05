import {Letter} from "./interfaces";
import {countLetters} from "./count-letters";
import {mapValues} from "../object-util";
import {fillWithZeros} from "./util";

export function letterDistribution(input: string): Record<Letter, number> {
    const letterCounter = fillWithZeros(countLetters(input));
    return mapValues(letterCounter, (count) => {
        return count / (input.length || 1);
    });
}

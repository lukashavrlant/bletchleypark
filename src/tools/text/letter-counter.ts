import {Letter} from "./interfaces";
import {englishAlphabet} from "../constants";

export function countLetters(input: string): Record<Letter, number> {
    const counter = initializeCounter();

    for (const letter of input) {
        counter[letter] += 1;
    }

    return counter;
}

function initializeCounter(): Record<Letter, number> {
    const counter: Record<Letter, number> = {};
    englishAlphabet.forEach(letter => counter[letter] = 0);
    return counter;
}

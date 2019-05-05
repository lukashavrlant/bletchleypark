import {Letter} from "./interfaces";
import {englishAlphabet} from "../constants";

export function fillWithZeros(object: Record<Letter, number>): Record<Letter, number> {
    const newObject = {...object};

    englishAlphabet.forEach((letter) => {
        if (!newObject[letter]) {
            newObject[letter] = 0;
        }
    });

    return newObject;
}

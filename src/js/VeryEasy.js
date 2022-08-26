import { blueCards, brownCards, greenCards } from "../data/mythicCards";
import { shuffle } from "./Game";

export const createGreenDeckVeryEasy = (green) => {
    let count = 0;
    let greenArray = [];
    greenCards.forEach(card => {
        if (card.difficulty === 'easy' && count < green) {
            greenArray.push(card);
            count++;
        }
    })
    if (greenArray.length < green) {
        greenCards.forEach(card => {
            if (card.difficulty === 'normal' && count < green) {
                greenArray.push(card);
                count++;
            } 
        })
    }
    shuffle(greenArray);
    return greenArray;
}

export const createBlueDeckVeryEasy = (blue) => {
    let count = 0;
    let blueArray = [];
    blueCards.forEach(card => {
        if (card.difficulty === 'easy' && count < blue) {
            blueArray.push(card);
            count++;
        }
    })
    if (blueArray.length < blue) {
        blueCards.forEach(card => {
            if (card.difficulty === 'normal' && count < blue) {
                blueArray.push(card);
                count++;
            } 
        })
    }
    shuffle(blueArray);
    return blueArray;
}

export const createBrownDeckVeryEasy = (brown) => {
    let count = 0;
    let brownArray = [];
    brownCards.forEach(card => {
        if (card.difficulty === 'easy' && count < brown) {
            brownArray.push(card);
            count++;
        }
    })
    if (brownArray.length < brown) {
        brownCards.forEach(card => {
            if (card.difficulty === 'normal' && count < brown) {
                brownArray.push(card);
                count++;
            } 
        })
    }
    shuffle(brownArray);
    return brownArray;
}
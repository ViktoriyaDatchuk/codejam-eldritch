import { blueCards, brownCards, greenCards } from "../data/mythicCards";

export const createGreenDeckEasy = (green) => {
    let array = [];
    let greenArray = [];
    greenCards.forEach(card => {
        if (card.difficulty !== 'hard') {
            array.push(card);
        }
    })
    for (let i = 0; i < green; i++) {
        const randomNumber = Math.floor(Math.random() * array.length);
        greenArray.push(array[randomNumber]);
        array.splice(randomNumber, 1);
    }
    return greenArray;
}

export const createBlueDeckEasy = (blue) => {
    let array = [];
    let blueArray = [];
    blueCards.forEach(card => {
        if (card.difficulty !== 'hard') {
            array.push(card);
        }
    })
    for (let i = 0; i < blue; i++) {
        const randomNumber = Math.floor(Math.random() * array.length);
        blueArray.push(array[randomNumber]);
        array.splice(randomNumber, 1);
    }
    return blueArray;
}

export const createBrownDeckEasy = (brown) => {
    let array = [];
    let brownArray = [];
    brownCards.forEach(card => {
        if (card.difficulty !== 'hard') {
            array.push(card);
        }
    })
    for (let i = 0; i < brown; i++) {
        const randomNumber = Math.floor(Math.random() * array.length);
        brownArray.push(array[randomNumber]);
        array.splice(randomNumber, 1);
    }
    return brownArray;
}
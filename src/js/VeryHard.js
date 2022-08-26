import { blueCards, brownCards, greenCards } from "../data/mythicCards";

export const createGreenDeckVeryHard = (green) => {
    let arrayHard = [];
    let arrayNormal = [];
    let greenArray = [];
    greenCards.forEach(card => {
        if (card.difficulty === 'hard') {
            arrayHard.push(card);
        } else if (card.difficulty === 'normal') {
            arrayNormal.push(card);
        }
    })
    if (arrayHard.length < green) {
        for (let i = 0; i < (green - arrayHard.length); i++) {
            const randomNumber = Math.floor(Math.random() * arrayNormal.length);
            arrayHard.push(arrayNormal[randomNumber]);
            arrayNormal.splice(randomNumber, 1);
        }
    }
    for (let i = 0; i < green; i++) {
        const randomNumber = Math.floor(Math.random() * arrayHard.length);
        greenArray.push(arrayHard[randomNumber]);
        arrayHard.splice(randomNumber, 1);
    }
    return greenArray;
}

export const createBlueDeckVeryHard = (blue) => {
    let arrayHard = [];
    let arrayNormal = [];
    let blueArray = [];
    blueCards.forEach(card => {
        if (card.difficulty === 'hard') {
            arrayHard.push(card);
        } else if (card.difficulty === 'normal') {
            arrayNormal.push(card);
        }
    })
    if (arrayHard.length < blue) {
        for (let i = 0; i < (blue - arrayHard.length); i++) {
            const randomNumber = Math.floor(Math.random() * arrayNormal.length);
            arrayHard.push(arrayNormal[randomNumber]);
            arrayNormal.splice(randomNumber, 1);
        }
    }
    for (let i = 0; i < blue; i++) {
        const randomNumber = Math.floor(Math.random() * arrayHard.length);
        blueArray.push(arrayHard[randomNumber]);
        arrayHard.splice(randomNumber, 1);
    }
    return blueArray;
}

export const createBrownDeckVeryHard = (brown) => {
    let arrayHard = [];
    let arrayNormal = [];
    let brownArray = [];
    brownCards.forEach(card => {
        if (card.difficulty === 'hard') {
            arrayHard.push(card);
        } else if (card.difficulty === 'normal') {
            arrayNormal.push(card);
        }
    })
    if (arrayHard.length < brown) {
        for (let i = 0; i < (brown - arrayHard.length); i++) {
            const randomNumber = Math.floor(Math.random() * arrayNormal.length);
            arrayHard.push(arrayNormal[randomNumber]);
            arrayNormal.splice(randomNumber, 1);
        }
    }
    for (let i = 0; i < brown; i++) {
        const randomNumber = Math.floor(Math.random() * arrayHard.length);
        brownArray.push(arrayHard[randomNumber]);
    }  
    return brownArray;
}
import { blueCards, brownCards, greenCards } from "../data/mythicCards";

export const createGreenDeckVeryEasy = (green) => {
    let arrayEasy = [];
    let arrayNormal = [];
    let greenArray = [];
    greenCards.forEach(card => {
        if (card.difficulty === 'easy') {
            arrayEasy.push(card);
        } else if (card.difficulty === 'normal') {
            arrayNormal.push(card);
        }
    })
    if (arrayEasy.length < green) {
        for (let i = 0; i < (green - arrayEasy.length); i++) {
            const randomNumber = Math.floor(Math.random() * arrayNormal.length);
            arrayEasy.push(arrayNormal[randomNumber]);
            arrayNormal.splice(randomNumber, 1);
        }
    }
    for (let i = 0; i < green; i++) {
        const randomNumber = Math.floor(Math.random() * arrayEasy.length);
        greenArray.push(arrayEasy[randomNumber]);
        arrayEasy.splice(randomNumber, 1);
    }
    return greenArray;
}

export const createBlueDeckVeryEasy = (blue) => {
    let arrayEasy = [];
    let arrayNormal = [];
    let blueArray = [];
    blueCards.forEach(card => {
        if (card.difficulty === 'easy') {
            arrayEasy.push(card);
        } else if (card.difficulty === 'normal') {
            arrayNormal.push(card);
        }
    })
    if (arrayEasy.length < blue) {
        for (let i = 0; i < (blue - arrayEasy.length); i++) {
            const randomNumber = Math.floor(Math.random() * arrayNormal.length);
            arrayEasy.push(arrayNormal[randomNumber]);
            arrayNormal.splice(randomNumber, 1);
        }
    }
    for (let i = 0; i < blue; i++) {
        const randomNumber = Math.floor(Math.random() * arrayEasy.length);
        blueArray.push(arrayEasy[randomNumber]);
        arrayEasy.splice(randomNumber, 1);
    }
    return blueArray;
}

export const createBrownDeckVeryEasy = (brown) => {
    let arrayEasy = [];
    let arrayNormal = [];
    let brownArray = [];
    brownCards.forEach(card => {
        if (card.difficulty === 'easy') {
            arrayEasy.push(card);
        } else if (card.difficulty === 'normal') {
            arrayNormal.push(card);
        }
    })
    if (arrayEasy.length < brown) {
        for (let i = 0; i < (brown - arrayEasy.length); i++) {
            const randomNumber = Math.floor(Math.random() * arrayNormal.length);
            arrayEasy.push(arrayNormal[randomNumber]);
            arrayNormal.splice(randomNumber, 1);
        }
    }
    for (let i = 0; i < brown; i++) {
        const randomNumber = Math.floor(Math.random() * arrayEasy.length);
        brownArray.push(arrayEasy[randomNumber]);
    }  
    return brownArray;
}
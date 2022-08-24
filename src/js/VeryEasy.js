import { blueCards, brownCards, greenCards } from "../data/mythicCards";

export const startVeryEasyGame = (firstStage, secondStage, thirdStage) => {
    const green = firstStage.greenCards + secondStage.greenCards + thirdStage.greenCards;
    const blue = firstStage.blueCards + secondStage.blueCards + thirdStage.blueCards;
    const brown = firstStage.brownCards + secondStage.brownCards + thirdStage.brownCards;
    const greenArray = createGreenDeck(green);
    const blueArray = createBlueDeck(blue);
    const brownArray = createBrownDeck(brown);
    console.log(greenArray);
    console.log(blueArray);
    console.log(brownArray);
}

const createGreenDeck = (green) => {
    let count = 0;
    let greenArray = [];
    greenCards.forEach(card => {
        if (card.difficulty === 'easy' && count < green) {
            greenArray.push(card.id);
            count++;
        }
    })
    if (greenArray.length < green) {
        greenCards.forEach(card => {
            if (card.difficulty === 'normal' && count < green) {
                greenArray.push(card.id);
                count++;
            } 
        })
    }
    shuffle(greenArray);
    return greenArray;
}

const createBlueDeck = (blue) => {
    let count = 0;
    let blueArray = [];
    blueCards.forEach(card => {
        if (card.difficulty === 'easy' && count < blue) {
            blueArray.push(card.id);
            count++;
        }
    })
    if (blueArray.length < blue) {
        blueCards.forEach(card => {
            if (card.difficulty === 'normal' && count < blue) {
                blueArray.push(card.id);
                count++;
            } 
        })
    }
    shuffle(blueArray);
    return blueArray;
}

const createBrownDeck = (brown) => {
    let count = 0;
    let brownArray = [];
    brownCards.forEach(card => {
        if (card.difficulty === 'easy' && count < brown) {
            brownArray.push(card.id);
            count++;
        }
    })
    if (brownArray.length < brown) {
        brownCards.forEach(card => {
            if (card.difficulty === 'normal' && count < brown) {
                brownArray.push(card.id);
                count++;
            } 
        })
    }
    shuffle(brownArray);
    return brownArray;
}

const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  }
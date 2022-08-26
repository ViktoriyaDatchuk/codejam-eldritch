import { setMythicCardBack } from "..";
import ancientsData from "../data/ancients"
import { startEasyGame } from "./Easy";
import { startHardGame } from "./Hard";
import { startNormalGame } from "./Normal";
import { createBlueDeckVeryEasy, createBrownDeckVeryEasy, createGreenDeckVeryEasy } from "./VeryEasy";
import { startVeryHardGame } from "./VeryHard";

let firstStage;
let secondStage;
let thirdStage;
let difficulty;
let firstStageArray;
let secondStageArray;
let thirdStageArray;
let greenArray;
let blueArray;
let brownArray;

export const startGame = (card) => {
    ancientsData.forEach(elem => {
        if (card.classList.contains(elem.id)) {
            firstStage = elem.firstStage;
            secondStage = elem.secondStage;
            thirdStage = elem.thirdStage;
        }
    })
    const buttons = document.querySelector('.difficulty');
    buttons.addEventListener('click', setup)
}

const setup = (e) => {
    addDifficultyButtonClickHandler(e);
    document.querySelector('.card-wrapper').classList.add('hidden');
    document.querySelector('.select-card').style.backgroundImage = 'none';
    setMythicCardBack();
    const stage = document.querySelectorAll('.stage-title');
    for (let title of stage) {
        title.style.color = 'aliceblue';
    }
}

const addDifficultyButtonClickHandler = (e) => {
    if (e.target.classList.contains('difficulty-button')) {
        document.querySelector('.shuffle-deck').classList.remove('hidden');
        document.querySelectorAll('.difficulty-button').forEach(elem => {
        elem.classList.remove('active-button');
        })
        e.target.classList.add('active-button');
        difficulty = e.target.id;
        document.querySelector('.shuffle-deck').addEventListener('click', addShuffleDeckButtonHandler)
    }
}

const addShuffleDeckButtonHandler = (e) => {
    addValuesToTracker();
    e.target.classList.add('active-button');
    document.querySelector('.card-wrapper').classList.remove('hidden');
    const green = firstStage.greenCards + secondStage.greenCards + thirdStage.greenCards;
    const blue = firstStage.blueCards + secondStage.blueCards + thirdStage.blueCards;
    const brown = firstStage.brownCards + secondStage.brownCards + thirdStage.brownCards;
    if (difficulty === 'veryEasy') {
        greenArray = createGreenDeckVeryEasy(green);
        blueArray = createBlueDeckVeryEasy(blue);
        brownArray = createBrownDeckVeryEasy(brown);
    }
    // } else if (difficulty === 'easy') {
    //     startEasyGame(firstStage, secondStage, thirdStage);
    // } else if (difficulty === 'normal') {
    //     startNormalGame(firstStage, secondStage, thirdStage);
    // } else if (difficulty === 'hard') {
    //     startHardGame(firstStage, secondStage, thirdStage);
    // } else {
    //     startVeryHardGame(firstStage, secondStage, thirdStage);
    // }
    firstStageArray = createStage(firstStage, greenArray, blueArray, brownArray);
    secondStageArray = createStage(secondStage, greenArray, blueArray, brownArray);
    thirdStageArray = createStage(thirdStage, greenArray, blueArray, brownArray);
    document.querySelector('.card-deck').addEventListener('click', showCards);
}

const showCards = () => {
    if (firstStageArray.length > 0) {
        const selectCard = firstStageArray.pop();
        document.querySelector('.select-card').style.backgroundImage = `url('${selectCard.cardFace}')`;
        console.log(selectCard);
        if (firstStageArray.length === 0) {
            document.querySelectorAll('.stage-title')[0].style.color = 'red';
        }
        if (selectCard.color === 'green') {
            document.querySelectorAll('.green')[0].innerHTML--;
        } else if (selectCard.color === 'blue') {
            document.querySelectorAll('.blue')[0].innerHTML--;
        } else {
            document.querySelectorAll('.brown')[0].innerHTML--;
        }
    } else if (secondStageArray.length > 0) {
        const selectCard = secondStageArray.pop();
        document.querySelector('.select-card').style.backgroundImage = `url('${selectCard.cardFace}')`;
        console.log(selectCard);
        if (secondStageArray.length === 0) {
            document.querySelectorAll('.stage-title')[1].style.color = 'red';
        }
        if (selectCard.color === 'green') {
            document.querySelectorAll('.green')[1].innerHTML--;
        } else if (selectCard.color === 'blue') {
            document.querySelectorAll('.blue')[1].innerHTML--;
        } else {
            document.querySelectorAll('.brown')[1].innerHTML--;
        }
    } else if (thirdStageArray.length > 0) {
        const selectCard = thirdStageArray.pop();
        document.querySelector('.select-card').style.backgroundImage = `url('${selectCard.cardFace}')`;
        console.log(selectCard);
        if (thirdStageArray.length === 0) {
            document.querySelectorAll('.stage-title')[2].style.color = 'red';
            document.querySelector('.card-deck').style.backgroundImage = 'none';
        }
        if (selectCard.color === 'green') {
            document.querySelectorAll('.green')[2].innerHTML--;
        } else if (selectCard.color === 'blue') {
            document.querySelectorAll('.blue')[2].innerHTML--;
        } else {
            document.querySelectorAll('.brown')[2].innerHTML--;
        }
    }
}

const addValuesToTracker = () => {
    const green = document.querySelectorAll('.green');
    const blue = document.querySelectorAll('.blue');
    const brown = document.querySelectorAll('.brown');
    green[0].innerHTML = firstStage.greenCards;
    blue[0].innerHTML = firstStage.blueCards;
    brown[0].innerHTML = firstStage.brownCards;
    green[1].innerHTML = secondStage.greenCards;
    blue[1].innerHTML = secondStage.blueCards;
    brown[1].innerHTML = secondStage.brownCards;
    green[2].innerHTML = thirdStage.greenCards;
    blue[2].innerHTML = thirdStage.blueCards;
    brown[2].innerHTML = thirdStage.brownCards;
}

const addGreenCards = (stage, array, greenArray) => {
    for (let i = 0; i < stage.greenCards; i++) {
        const randomNumber = Math.floor(Math.random() * greenArray.length);
        array.push(greenArray[randomNumber]);
        greenArray.splice(randomNumber, 1);
    }
}

const addBlueCards = (stage, array, blueArray) => {
    for (let i = 0; i < stage.blueCards; i++) {
        const randomNumber = Math.floor(Math.random() * blueArray.length);
        array.push(blueArray[randomNumber]);
        blueArray.splice(randomNumber, 1);
    }
}

const addBrownCards = (stage, array, brownArray) => {
    for (let i = 0; i < stage.brownCards; i++) {
        const randomNumber = Math.floor(Math.random() * brownArray.length);
        array.push(brownArray[randomNumber]);
        brownArray.splice(randomNumber, 1);
    }
}

const createStage = (stage, greenArray, blueArray, brownArray) => {
    let stageArray = [];
    addGreenCards(stage, stageArray, greenArray);
    addBlueCards(stage, stageArray, blueArray);
    addBrownCards(stage, stageArray, brownArray);
    shuffle(stageArray);
    return stageArray;
}

export const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
};
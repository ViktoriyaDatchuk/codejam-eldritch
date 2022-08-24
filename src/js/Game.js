import ancientsData from "../data/ancients"
import { startEasyGame } from "./Easy";
import { startHardGame } from "./Hard";
import { startNormalGame } from "./Normal";
import { startVeryEasyGame } from "./VeryEasy";
import { startVeryHardGame } from "./VeryHard";

export const startGame = (card) => {
    let firstStage;
    let secondStage;
    let thirdStage;
    ancientsData.forEach(elem => {
        if (card.classList.contains(elem.id)) {
            firstStage = elem.firstStage;
            secondStage = elem.secondStage;
            thirdStage = elem.thirdStage;
        }
    })
    const buttons = document.querySelector('.difficulty');
    buttons.addEventListener('click', (e) => {
        addDifficultyButtonClickHandler(e, firstStage, secondStage, thirdStage);
    })
}

const addDifficultyButtonClickHandler = (e, firstStage, secondStage, thirdStage) => {
    let difficulty;
    if (e.target.classList.contains('difficulty-button')) {
        document.querySelector('.shuffle-deck').classList.remove('hidden');
        document.querySelectorAll('.difficulty-button').forEach(elem => {
        elem.classList.remove('active-button');
        })
        e.target.classList.add('active-button');
        difficulty = e.target.id;
        document.querySelector('.shuffle-deck').addEventListener('click', (e) => {
            addShuffleDeckButtonHandler(e, difficulty, firstStage, secondStage, thirdStage);
        })
    }
}

const addShuffleDeckButtonHandler = (e, difficulty, firstStage, secondStage, thirdStage) => {
    addValuesToTracker(firstStage, secondStage, thirdStage);
    e.target.classList.add('active-button');
    document.querySelector('.card-wrapper').classList.remove('hidden');
    if (difficulty === 'veryEasy') {
        startVeryEasyGame(firstStage, secondStage, thirdStage);
    } else if (difficulty === 'easy') {
        startEasyGame(firstStage, secondStage, thirdStage);
    } else if (difficulty === 'normal') {
        startNormalGame(firstStage, secondStage, thirdStage);
    } else if (difficulty === 'hard') {
        startHardGame(firstStage, secondStage, thirdStage);
    } else {
        startVeryHardGame(firstStage, secondStage, thirdStage);
    }
}

const addValuesToTracker = (firstStage, secondStage, thirdStage) => {
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
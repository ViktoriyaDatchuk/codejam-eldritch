const { default: ancientsData } = require("./data/ancients");
const { default: difficulties } = require("./data/difficulties");
const { startGame } = require("./js/Game");
import "./css/style.css";
import "./assets/img/mythicCardBackground.png";

window.onload = function() {
    //AncientsImages
    setAncientsImages();

    //DifficultyButtons
    setNamesDifficultyButtons();

    //MythicCardBack
    // setMythicCardBack();

    //Game
    ancientClickHandler();
}

const setAncientsImages = () => {
    const ancientsElem = document.querySelectorAll('.ancients-card');
    for (let card of ancientsElem) {
        ancientsData.forEach(elem => {
            if (card.classList.contains(elem.id)) {
                const img = new Image();
                img.src = elem.cardFace;
                img.onload = () => {
                    card.style.backgroundImage = `url('${img.src}')`;
                }
            }
        })
    }
}

const setNamesDifficultyButtons = () => {
    const buttons = document.querySelectorAll('.difficulty-button');
    for (let but of buttons) {
        difficulties.forEach( elem => {
            if (but.id === elem.id) {
                but.innerHTML = elem.name;
            }
        })
    }
}

export const setMythicCardBack = () => {
    document.querySelector('.card-deck').style.backgroundImage = `url('../dist/asset/mythicCardBackground.png')`;
}

const ancientClickHandler = () => {
    const ancientsCards = document.querySelectorAll('.ancients-card');
    const selectCard = document.querySelector('.ancients-cards');
    selectCard.addEventListener('click', (event) => {
        const buttons = document.querySelectorAll('.difficulty-button');
        for (let but of buttons) {
            but.classList.remove('active-button');
        }
        document.querySelector('.card-wrapper').classList.add('hidden');
        document.querySelector('.select-card').style.backgroundImage = 'none';
        setMythicCardBack();
        const stage = document.querySelectorAll('.stage-title');
        for (let title of stage) {
            title.style.color = 'aliceblue';
        }
        for (let elem of ancientsCards) {
            elem.classList.remove('selected');
        };
        event.target.classList.add('selected');
        startGame(event.target);
    });
}


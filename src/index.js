const { default: ancientsData } = require("./data/ancients");
const { default: difficulties } = require("./data/difficulties");
const { startGame } = require("./js/Game");

window.onload = function() {
    //AncientsImages
    setAncientsImages();

    //DifficultyButtons
    setNamesDifficultyButtons();

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

const ancientClickHandler = () => {
    const ancientsCards = document.querySelectorAll('.ancients-card');
    ancientsCards.forEach(card => {
        card.addEventListener('click', () => {
            const buttons = document.querySelectorAll('.difficulty-button');
            for (but of buttons) {
                but.classList.remove('active-button');
            };
            document.querySelector('.card-wrapper').classList.add('hidden');
            for (elem of ancientsCards) {
                elem.classList.remove('selected');
            };
            card.classList.add('selected');
            startGame(card);
        });
    })
}
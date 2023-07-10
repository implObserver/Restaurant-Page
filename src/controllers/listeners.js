import { addImageToPlace } from "../models/menu/menuPage";
import { openTab } from "../models/page";
import { Animations } from "../views/animations/animations";

export const setAnimationsForTab = (tab) => {
    tab.addEventListener('click', e => {
        openTab(tab);
    });
    tab.addEventListener('mouseenter', e => {
        Animations.custom(tab, 200, 'forwards', [{ height: '3vh' }, { height: '4vh' }]);
    });
    tab.addEventListener('mouseleave', e => {
        Animations.custom(tab, 200, 'forwards', [{ height: '4vh' }, { height: '3vh' }]);
    });
}

export const clickImage = () => {
    let cards = document.querySelectorAll('.sidebar > div');
    for (let card of cards) {
        let cloneImage = card.firstChild.cloneNode()
        card.addEventListener('click', e => {
            addImageToPlace(cloneImage);
        });
        card.addEventListener('mouseenter', e => {
            Animations.transform.x(card, '0vh', '1vh', 100, 'forwards');
        });
        card.addEventListener('mouseleave', e => {
            Animations.transform.x(card, '1vh', '0vh', 100, 'forwards');
        });
    }
}
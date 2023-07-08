import { Tools } from "../../helper/tools";

const content = document.querySelector('.content');
let homePlace;
let homePlace2;

const createHome = (() => {
    homePlace = Tools.createNode('div', 'home-place');
    homePlace2 = Tools.createNode('div', 'home-place2');
    Tools.appendChilds(content, homePlace, homePlace2);
    Tools.displayMode('none', homePlace, homePlace2);

})();

export const addHomeContent = () => {
    content.style.gridTemplateRows = "1fr 2fr";
    Tools.displayMode('grid', homePlace, homePlace2);
    Tools.smoothVisibilityGroup(homePlace, homePlace2).open(0, 1, 300, 'forwards');
}

export const hiddenHomeContent = () => {
    Tools.smoothVisibilityGroup(homePlace, homePlace2).close(1, 0, 300, 'forwards');
    content.style.gridTemplateRows = "";
    Tools.displayMode('none', homePlace, homePlace2);
}
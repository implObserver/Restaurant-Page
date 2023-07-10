import { Tools } from "../../helper/tools";

const content = document.querySelector('.content');
let greeting;
let homePlace2;

const createHome = (() => {
    greeting = Tools.createNode('div', 'greeting');
    homePlace2 = Tools.createNode('div', 'home-place2');
    Tools.appendChilds(content, greeting, homePlace2);
    Tools.displayMode('none', greeting, homePlace2);

})();

export const addHomeContent = () => {
    content.style.gridTemplateRows = "1fr 2fr";
    Tools.displayMode('grid', greeting, homePlace2);
    Tools.smoothVisibilityGroup(greeting, homePlace2).open(0, 1, 300, 'forwards');
}

export const hiddenHomeContent = () => {
    Tools.smoothVisibilityGroup(greeting, homePlace2).close(1, 0, 300, 'forwards');
    content.style.gridTemplateRows = "";
    Tools.displayMode('none', greeting, homePlace2);
}
import { Tools } from "../../helper/tools";

const content = document.querySelector('.content');

let greetingContainer;
let corgi;
let greeting;

const createHome = (() => {
    greetingContainer = Tools.createNode('div', 'greeting-container');
    corgi = Tools.createNode('div', 'corgi');
    greeting = Tools.getNodeWithSpan('div', 'Hi! Welcome to the sweet world of the Corgi pastry chef!', 'greeting');
    Tools.appendChilds(greetingContainer, corgi, greeting);
    Tools.appendChilds(content, greetingContainer);
    Tools.displayMode('none', greetingContainer);

})();

export const addHomeContent = () => {
    Tools.displayMode('grid', greetingContainer);
    Tools.smoothVisibilityGroup(greetingContainer).open(0.1, 1, 500, 'forwards');
}

export const hiddenHomeContent = () => {
    Tools.smoothVisibilityGroup(greetingContainer).close(1, 0, 200, 'forwards');
    Tools.displayMode('none', greetingContainer);
}

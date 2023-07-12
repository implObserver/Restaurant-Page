import { Tools } from "../../helper/tools";
const content = document.querySelector('.content');

let contactsContainer;
let number;
let location;
let clarification;

const getSnapshot = () => {
    const snapshot = new Image();
    snapshot.src = require(`../../views/images/map.png`);
    return snapshot;
}

const createAbout = (() => {
    contactsContainer = Tools.createNode('div', 'contacts-container');
    number = Tools.getNodeWithSpan('div', 'PHONE-NUMBER: 7-777-777', 'number');
    location = Tools.createNode('div', 'location');
    clarification = Tools.getNodeWithSpan('div', `*Psst, it's a little learning project`, 'clarification');
    Tools.appendChilds(location, getSnapshot());
    Tools.appendChilds(contactsContainer, number, location, clarification);
    Tools.appendChilds(content, contactsContainer);
    Tools.displayMode('none', contactsContainer);

})();

export const addAboutContent = () => {
    Tools.displayMode('grid', contactsContainer);
    Tools.smoothVisibilityGroup(contactsContainer).open(0.1, 1, 500, 'forwards');
}

export const hiddenAboutContent = () => {
    Tools.smoothVisibilityGroup(contactsContainer).close(1, 0, 200, 'forwards');
    Tools.displayMode('none', contactsContainer);
}
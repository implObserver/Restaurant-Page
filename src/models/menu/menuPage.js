import { Tools } from "../../helper/tools";

const content = document.querySelector('.content');
let leftSideBar;
let imagePlace;

const createMenu = (() => {
    leftSideBar = Tools.createNode('div', 'sidebar');
    imagePlace = Tools.createNode('div', 'image-place');
    Tools.appendChilds(content, leftSideBar, imagePlace);
    Tools.displayMode('none', leftSideBar, imagePlace);
    for (let i = 0; i < 7; i++) {
        leftSideBar.appendChild(Tools.createNode('div', i));
    }
})();

export const addMenuContent = () => {
    content.style.gridTemplateColumns = "1fr 2fr";
    Tools.displayMode('grid', leftSideBar, imagePlace);
    Tools.smoothVisibilityGroup(leftSideBar, imagePlace).open(0, 1, 300, 'forwards');
}

export const hiddenMenuContent = () => {
    Tools.smoothVisibilityGroup(leftSideBar, imagePlace).close(1, 0, 300, 'forwards');
    content.style.gridTemplateColumns = "";
    Tools.displayMode('none', leftSideBar, imagePlace);
}
import { Tools } from "../../helper/tools";

const content = document.querySelector('.content');
let leftSideBar;
let imagePlace;

const getImage = (i) => {
    const image = new Image();
    image.src = require(`../../views/images/${i}.jpg`);
    return image;
}

const createMenu = (() => {
    leftSideBar = Tools.createNode('div', 'sidebar');
    imagePlace = Tools.createNode('div', 'image-place');
    Tools.appendChilds(content, leftSideBar, imagePlace);
    Tools.displayMode('none', leftSideBar, imagePlace);
    for (let i = 0; i < 7; i++) {
        let card = Tools.createNode('div', i);
        let image = getImage(i);
        card.appendChild(image);
        if (i === 0) {
            console.log('w');
            imagePlace.appendChild(getImage(i));
        }
        leftSideBar.appendChild(card);
    }
})();

export const addMenuContent = () => {
    content.style.gridTemplateColumns = "1fr 2fr";
    Tools.displayMode('grid', leftSideBar, imagePlace);
    Tools.smoothVisibilityGroup(leftSideBar, imagePlace).open(0.1, 1, 500, 'forwards');
}

export const hiddenMenuContent = () => {
    Tools.smoothVisibilityGroup(leftSideBar, imagePlace).close(1, 0, 200, 'forwards');
    content.style.gridTemplateColumns = "";
    Tools.displayMode('none', leftSideBar, imagePlace);
}

export const addImageToPlace = (image) => {
    Tools.removeChilds(imagePlace);
    Tools.smoothVisibility().open(image, 0, 1, 800, 'forwards');
    imagePlace.appendChild(image);
}
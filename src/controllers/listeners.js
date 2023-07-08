import { Animations } from "../views/animations/animations";

export const openHome = () => {
    document.querySelector('.home').addEventListener('click', e => {
        let content = document.querySelector('.content');
        let contentColor = content.style.backgroundColor;
        Animations.background(content, contentColor, '#FFFFFF', 200, 'forwards');
    });
}

export const openMenu = () => {
    document.querySelector('.menu').addEventListener('click', e => {
        let content = document.querySelector('.content');
        let contentColor = content.style.backgroundColor;
        Animations.background(content, contentColor, '#FFF0D3', 200, 'forwards');
    });
}

export const openAbout = () => {
    document.querySelector('.about').addEventListener('click', e => {
        let content = document.querySelector('.content');
        let contentColor = content.style.backgroundColor;
        Animations.background(content, contentColor, '#D7F5FF', 200, 'forwards');
    });
}
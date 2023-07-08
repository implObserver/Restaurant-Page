import { Animations } from "../views/animations/animations";

export const openHome = () => {
    let home = document.querySelector('.home');
    home.addEventListener('click', e => {
        let content = document.querySelector('.content');
        let contentColor = content.style.backgroundColor;
        Animations.background(content, contentColor, '#FFFFFF', 200, 'forwards');
    });
    home.addEventListener('mouseleave', e => {
        Animations.custom(home, 200, 'forwards', [{ height: '4vh' }, { height: '3vh' }]);
    });
    home.addEventListener('mouseenter', e => {
        Animations.custom(home, 200, 'forwards', [{ height: '3vh' }, { height: '4vh' }]);
    });
}

export const openMenu = () => {
    let menu = document.querySelector('.menu');
    menu.addEventListener('click', e => {
        let content = document.querySelector('.content');
        let contentColor = content.style.backgroundColor;
        Animations.background(content, contentColor, '#FFF0D3', 200, 'forwards');
    });
    menu.addEventListener('mouseleave', e => {
        Animations.custom(menu, 200, 'forwards', [{ height: '4vh' }, { height: '3vh' }]);
    });
    menu.addEventListener('mouseenter', e => {
        Animations.custom(menu, 200, 'forwards', [{ height: '3vh' }, { height: '4vh' }]);
    });
}

export const openAbout = () => {
    let about = document.querySelector('.about');
    about.addEventListener('click', e => {
        let content = document.querySelector('.content');
        let contentColor = content.style.backgroundColor;
        Animations.background(content, contentColor, '#D7F5FF', 200, 'forwards');
    });
    about.addEventListener('mouseleave', e => {
        Animations.custom(about, 200, 'forwards', [{ height: '4vh' }, { height: '3vh' }]);
    });
    about.addEventListener('mouseenter', e => {
        Animations.custom(about, 200, 'forwards', [{ height: '3vh' }, { height: '4vh' }]);
    });
}
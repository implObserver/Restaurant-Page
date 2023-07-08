import { Tools } from "../helper/tools";
import { Animations } from "../views/animations/animations";
import { addHomeContent, hiddenHomeContent } from "./home/homePage";
import { addMenuContent, hiddenMenuContent } from "./menu/menuPage";

let homeScrollTop = 0;
let menuScrollTop = 0;
let aboutScrollTop = 0;
let name;

export const setAnimationsForTab = (tab) => {

    tab.addEventListener('click', e => {
        console.log(menuScrollTop)
        name = tab.textContent;
        let content = document.querySelector('.content');
        let contentColor = Tools.rgba2hex(document.defaultView.getComputedStyle(content).backgroundColor);
        let tabColor = Tools.rgba2hex(document.defaultView.getComputedStyle(tab).backgroundColor);
        Animations.background(content, contentColor, tabColor, 200, 'forwards');
        addContent();
    });
    tab.addEventListener('mouseenter', e => {
        Animations.custom(tab, 200, 'forwards', [{ height: '3vh' }, { height: '4vh' }]);
    });
    tab.addEventListener('mouseleave', e => {
        Animations.custom(tab, 200, 'forwards', [{ height: '4vh' }, { height: '3vh' }]);
    });
}

const addContent = () => {
    if (name === 'home') {
        hiddenMenuContent();
        addHomeContent();
        window.scrollTo(0, homeScrollTop);
    }

    if (name === 'menu') {
        addMenuContent();
        hiddenHomeContent()
        window.scrollTo(0, menuScrollTop);
    }

    if (name === 'about') {
        hiddenMenuContent();
        hiddenHomeContent()
        window.scrollTo(0, aboutScrollTop);
    }
}

export const checkScroll = () => {
    window.addEventListener('scroll', e => {
        if (name === 'home') {
            homeScrollTop = window.scrollY;
        }
        if (name === 'menu') {
            menuScrollTop = window.scrollY;
        }
        if (name === 'about') {
            aboutScrollTop = window.scrollY;
        }
    });
}
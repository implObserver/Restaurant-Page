import { Tools } from "../helper/tools";
import { Animations } from "../views/animations/animations";
import { addHomeContent, hiddenHomeContent } from "./home/homePage";
import { addMenuContent, hiddenMenuContent } from "./menu/menuPage";

const header = Tools.createNode('header');
const logoWrapper = Tools.createNode('div', 'logo-wrapper');
const logo = Tools.createNode('div', 'icon-wrapper', 'logo');
const titleWrapper = Tools.createNode('div', 'title-wrapper')
const title = Tools.getNodeWithSpan('div', 'RESTARAUNT', 'main-title');
const lowTitle = Tools.getNodeWithSpan('div', 'Corgi, SWEET TOOTH', 'low-title');
const tabs = Tools.createNode('div', 'tabs');
const home = Tools.getNodeWithSpan('div', 'Home', 'home');
const menu = Tools.getNodeWithSpan('div', 'Menu', 'menu');
const about = Tools.getNodeWithSpan('div', 'About', 'about');

export const getHeader = () => {
    Tools.appendChilds(titleWrapper, title, lowTitle);
    Tools.appendChilds(logoWrapper, logo, titleWrapper);
    Tools.appendChilds(tabs, home, menu, about);
    Tools.appendChilds(header, logoWrapper, tabs);
    return header;
};

export const openTab = (tab) => {
    let name = tab.textContent;
    let content = document.querySelector('.content');
    let contentColor = Tools.rgba2hex(document.defaultView.getComputedStyle(content).backgroundColor);
    let tabColor = Tools.rgba2hex(document.defaultView.getComputedStyle(tab).backgroundColor);
    Animations.background(content, contentColor, tabColor, 200, 'forwards');
    addContent(name);
}

const addContent = (name) => {
    if (name === 'Home') {
        hiddenMenuContent();
        addHomeContent();
    }

    if (name === 'Menu') {
        addMenuContent();
        hiddenHomeContent()
    }

    if (name === 'About') {
        hiddenMenuContent();
        hiddenHomeContent()
    }
}

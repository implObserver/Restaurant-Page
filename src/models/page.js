import { Tools } from "../helper/tools";

const header = Tools.createNode('header');
const title = Tools.getNodeWithSpan('div', 'RESTARAUNT', 'main-title');
const tabs = Tools.createNode('div', 'tabs');
const home = Tools.getNodeWithSpan('div', 'home', 'home');
const menu = Tools.getNodeWithSpan('div', 'menu', 'menu');
const about = Tools.getNodeWithSpan('div', 'about', 'about');

export const getHeader = () => {
    Tools.appendChilds(tabs, home, menu, about);
    Tools.appendChilds(header, title, tabs);
    return header;
};

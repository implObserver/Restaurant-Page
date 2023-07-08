import { Tools } from "../helper/tools";
import { Animations } from "../views/animations/animations";

export const setAnimationsForTab = (tab) => {
    tab.addEventListener('click', e => {
        let content = document.querySelector('.content');
        let contentColor = Tools.rgba2hex(document.defaultView.getComputedStyle(content).backgroundColor);
        let tabColor = Tools.rgba2hex(document.defaultView.getComputedStyle(tab).backgroundColor);
        Animations.background(content, contentColor, tabColor, 200, 'forwards');
    });
    tab.addEventListener('mouseenter', e => {
        Animations.custom(tab, 200, 'forwards', [{ height: '3vh' }, { height: '4vh' }]);
    });
    tab.addEventListener('mouseleave', e => {
        Animations.custom(tab, 200, 'forwards', [{ height: '4vh' }, { height: '3vh' }]);
    });
}
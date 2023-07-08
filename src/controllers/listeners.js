import { setAnimationsForTab } from "../models/presets";
import { Animations } from "../views/animations/animations";

export const openHome = () => {
    let home = document.querySelector('.home');
    setAnimationsForTab(home);
}

export const openMenu = () => {
    let menu = document.querySelector('.menu');
    setAnimationsForTab(menu);
}

export const openAbout = () => {
    let about = document.querySelector('.about');
    setAnimationsForTab(about);
}
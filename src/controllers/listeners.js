import { checkScroll, setAnimationsForTab } from "../models/presets";

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

export const onScroll = () => {
    checkScroll();
}
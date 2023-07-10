import * as Listeners from './controllers/listeners'
import { getHeader } from './models/page';
import './views/css/templatePage.css';
import './views/css/home.css'
import './views/css/menu.css'
let wrapper = document.querySelector('.wrapper');
wrapper.insertBefore(getHeader(), wrapper.firstChild);

let home = document.querySelector('.home');
let menu = document.querySelector('.menu');
let about = document.querySelector('.about');

Listeners.setAnimationsForTab(home);
Listeners.setAnimationsForTab(menu);
Listeners.setAnimationsForTab(about);

Listeners.clickImage();
home.click();
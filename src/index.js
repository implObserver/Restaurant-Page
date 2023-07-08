import * as Listeners from './controllers/listeners'
import { getHeader } from './models/page';
import './views/css/templatePage.css';
import './views/css/home.css'
import './views/css/menu.css'

document.querySelector('.wrapper').insertBefore(getHeader(), document.querySelector('.wrapper').firstChild);
Listeners.openHome();
Listeners.openMenu();
Listeners.openAbout();
Listeners.onScroll();
let home = document.querySelector('.home').click();
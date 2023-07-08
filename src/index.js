import * as Listeners from './controllers/listeners'
import { getHeader } from './models/page';
import './views/css/templatePage.css';

document.querySelector('.wrapper').insertBefore(getHeader(), document.querySelector('.wrapper').firstChild);
Listeners.openHome();
Listeners.openMenu();
Listeners.openAbout();
import _ from 'lodash';
import * as Listeners from './controllers/listeners'
import './views/css/templatePage.css';
import { getHeader } from './models/page';

document.querySelector('.wrapper').insertBefore(getHeader(), document.querySelector('.wrapper').firstChild);
Listeners.openHome();
Listeners.openMenu();
Listeners.openAbout();
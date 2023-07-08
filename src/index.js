import _ from 'lodash';
import { Tools } from './helper/tools';
import './views/css/templatePage.css';
import { getHeader } from './models/page';

document.querySelector('.wrapper').insertBefore(getHeader(), document.querySelector('.wrapper').firstChild);
//Stylesheets
import 'assets/stylesheets/general.css';
import 'assets/stylesheets/animation.css';

import 'expose?Zone!zone.js';
import 'reflect-metadata';
import {App}         from 'components/app'
import { bootstrap } from 'angular2/platform/browser';
import {DAOS} from "./DAOs/DAOS";

bootstrap(App, [DAOS]);

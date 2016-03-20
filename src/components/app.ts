import { Component } from 'angular2/core';
import {Header} from './header/header.ts'

@Component({
  selector: 'App',
  directives: [Header],
  template: `
    <header></header>
    <img [src]=background>
   `
})

export class App {

  background = 'assets/img/BG.png';

  constructor() {
  }
}

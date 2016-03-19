import { Component } from 'angular2/core';
import {Header} from './header/header.ts'

@Component({
  selector: 'App',
  directives: [Header],
  template: `
    <header></header>
    <img [src]=background>
    <h1>{{ title }}</h1>
   `
})

export class App {

  background = 'assets/img/BG.png';

  public title:string;

  constructor() {
    this.title = "Angular2 Application "
  }
}

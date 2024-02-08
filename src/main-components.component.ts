import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import 'zone.js';
import { RouterLink, RouterOutlet } from '@angular/router';
import { appConfig } from './app.config';

@Component({
  selector: 'main-menu-component',
  standalone: true,
  imports: [NgOptimizedImage, RouterOutlet, RouterLink, CommonModule],
  template: `
  <h1>Defer components load</h1>
  <a routerLink="/"><=menu</a>

      <ul>
        <li>Показываем компонент только, если мы до него доскролим</li>
      </ul>

      <a routerLink="./default-component">Default component</a>
      <br>
      <a routerLink="./defer-angular">Defer Angular. Angular 17+</a>
      <br>
      <a routerLink="./defer-custom-angular">Defer Custom Angular</a>
      <br>
    <router-outlet></router-outlet>
  `,
})
export class MainMenuComponents {
  stateIsImage = true;
}

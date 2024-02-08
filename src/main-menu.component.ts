import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import 'zone.js';
import { RouterLink, RouterOutlet } from '@angular/router';
import { appConfig } from './app.config';

@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [NgOptimizedImage, RouterOutlet, RouterLink, CommonModule],
  template: `
  <div style="display: flex;">


      <span (click)="stateIsImage = true;" style="display: flex;">
        <input type="radio" id="images" name="menu" value="images" [checked]="stateIsImage"/>
        <label for="images">
          <h2>Image Lazy Loading</h2>
        </label>
      </span>


      <span (click)="stateIsImage = false;" style="display: flex;">
        <input type="radio" id="components" name="menu" value="components" [checked]="!stateIsImage"/>
        <label for="components">
          <h2>Component Defer Loading</h2>
        </label>
      </span>


  </div>

  <ng-container *ngIf="stateIsImage; else component;">

    <ul>
      <li>У всех картинок должны быть указаны width и height</li>
      <li>Откройте Network, чтобы наблюдать как загружаются изображения</li>
      <li>Версия Angular - 17(актуально и для других версий)</li>
    </ul>

    <a routerLink="/default">Default</a>
    <br>
    <a routerLink="/native-lazy">Native Lazy (loading="lazy")</a>
    <br>
    <a routerLink="/ngsrc">Ngsrc directive (NgOptimizedImage, Angular14+)</a>
    <br>
    <a routerLink="/lib-lazy">Npm lib for lazy (ng-lazyload-image)</a>
    <br>
    <a routerLink="/custom-directive-lazy">Custom directive</a>
    <br>

    </ng-container>

    <ng-template #component>
      <ul>
        <li>Показываем компонент только, если мы до него доскролим</li>
      </ul>

      <a routerLink="/default-component">Default component</a>
      <br>
      <a routerLink="/defer-angular">Defer Angular. Angular 17+</a>
      <br>
      <a routerLink="/defer-custom-angular">Defer Custom Angular</a>
      <br>
    </ng-template>
  `,
})
export class MainMenu {
  stateIsImage = true;
}

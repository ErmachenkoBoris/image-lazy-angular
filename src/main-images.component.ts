import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import 'zone.js';
import { RouterLink, RouterOutlet } from '@angular/router';
import { appConfig } from './app.config';

@Component({
  selector: 'main-menu-images',
  standalone: true,
  imports: [NgOptimizedImage, RouterOutlet, RouterLink, CommonModule],
  template: `
<h2>Image Lazy Loading</h2>

<a routerLink="/"><=menu</a>


<ul>
      <li>У всех картинок должны быть указаны width и height</li>
      <li>Откройте Network, чтобы наблюдать как загружаются изображения</li>
      <li>Версия Angular - 17(актуально и для других версий)</li>
    </ul>

    <a routerLink="./default">Default</a>
    <br>
    <a routerLink="./native-lazy">Native Lazy (loading="lazy")</a>
    <br>
    <a routerLink="./ngsrc">Ngsrc directive (NgOptimizedImage, Angular14+)</a>
    <br>
    <a routerLink="./lib-lazy">Npm lib for lazy (ng-lazyload-image)</a>
    <br>
    <a routerLink="./custom-directive-lazy">Custom directive</a>
    <br>

    <router-outlet></router-outlet>
  `,
})
export class MainMenuImages {
  stateIsImage = true;
}

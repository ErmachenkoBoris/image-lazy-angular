import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import 'zone.js';

@Component({
  selector: 'lib-lazy',
  standalone: true,
  imports: [LazyLoadImageModule, RouterLink],
  template: `
      <a routerLink="/"><=Menu</a>

    <h1>Lib Lazy Loading (ng-lazyload-image)</h1>
    <p>Грузит именно то, что находится во viewport</p>
    <p>По дефолту использует intersection observer, можно переключить на scroll listener хуки</p>
    <img src="https://dummyimage.com/600x400/753e75/fff&text=61" width="800" height="400">
    <br>
    <img lazyLoad="https://dummyimage.com/600x400/753e75/fff&text=62" width="800" height="400">
    <br>
    <img lazyLoad="https://dummyimage.com/600x400/753e75/fff&text=63" width="800" height="400">
    <br>
    <img lazyLoad="https://dummyimage.com/600x400/753e75/fff&text=64" width="800" height="400">
    <br>
    <img lazyLoad="https://dummyimage.com/600x400/753e75/fff&text=65" width="800" height="400">
    <br>
    <img lazyLoad="https://dummyimage.com/600x400/753e75/fff&text=66" width="800" height="400">
    <br>
    <img lazyLoad="https://dummyimage.com/600x400/753e75/fff&text=67" width="800" height="400">
  `,
})
export class LibLazy {}

import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'native-lazy',
  standalone: true,
  imports: [RouterLink],
  template: `
      <a routerLink="/"><=Menu</a>

    <h1>Native Lazy Loading - loading="lazy"</h1>
    <p>В зависимости от браузера работает по-разному, хром грузит сразу несколько картинок "с запасом"(зависит от скорости интернета
      <a href="https://web.dev/articles/browser-level-image-lazy-loading#distance-from-viewport_thresholds" target="_blank">Ссылка почитать про это</a>)</p>

    <img loading="lazy" src="https://dummyimage.com/600x400/753e75/fff&text=71" width="800" height="450">
    <br>
    <img loading="lazy" src="https://dummyimage.com/600x400/753e75/fff&text=72" width="800" height="450">
    <br>
    <img loading="lazy" src="https://dummyimage.com/600x400/753e75/fff&text=73" width="800" height="450">
    <br>
    <img loading="lazy" src="https://dummyimage.com/600x400/753e75/fff&text=74" width="800" height="450">
    <br>
    <img loading="lazy" src="https://dummyimage.com/600x400/753e75/fff&text=75" width="800" height="450">
    <br>
    <img loading="lazy" src="https://dummyimage.com/600x400/753e75/fff&text=76" width="800" height="450">
    <br>
    <img loading="lazy" src="https://dummyimage.com/600x400/753e75/fff&text=77" width="800" height="450">
    <br>

  `,
})
export class NativeLazy {}

import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ngsrc',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  template: `


    <h1>Ngsrc Loading(новая директива NgOptimizedImage Angular14+)</h1>
    <p>под капотом используется loading="lazy"<a target="_blank" href="https://github.com/angular/angular/blob/41b7ec4eb92361ec8f0a09d1d3db053c3890cc32/packages/common/src/directives/ng_optimized_image/ng_optimized_image.ts">исходники ангуляр</a></p>
    <img src="https://dummyimage.com/600x400/753e75/fff&text=81" width="800" height="400">
    <br>
    <img ngSrc="https://dummyimage.com/600x400/753e75/fff&text=82" width="800" height="400">
    <br>
    <img ngSrc="https://dummyimage.com/600x400/753e75/fff&text=83" width="800" height="400">
    <br>
    <img ngSrc="https://dummyimage.com/600x400/753e75/fff&text=84" width="800" height="400">
    <br>
    <img ngSrc="https://dummyimage.com/600x400/753e75/fff&text=85" width="800" height="400">
    <br>
    <img ngSrc="https://dummyimage.com/600x400/753e75/fff&text=86" width="800" height="400">
    <br>
    <img ngSrc="https://dummyimage.com/600x400/753e75/fff&text=87" width="800" height="400">
  `,
})
export class Ngsrc {}

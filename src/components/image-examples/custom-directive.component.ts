import { Component } from '@angular/core';
import { ImageLazyLoadModule } from '../../directives/lazy-load.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'custom-directive',
  standalone: true,
  imports: [ImageLazyLoadModule, RouterLink],
  template: `
      <a routerLink="/"><=Menu</a>

    <h1>Custom Directive Loading</h1>
    <p>Кастомная директива, которая будет работать на IntersectionObserver </p>
    <img src="https://dummyimage.com/600x400/753e75/fff&text=41" width="800" height="450">
    <img appLazyLoad src="https://dummyimage.com/600x400/753e75/fff&text=42" width="800" height="450">
    <img appLazyLoad src="https://dummyimage.com/600x400/753e75/fff&text=43" width="800" height="450">
    <img appLazyLoad src="https://dummyimage.com/600x400/753e75/fff&text=44" width="800" height="450">
    <img appLazyLoad src="https://dummyimage.com/600x400/753e75/fff&text=45" width="800" height="450">
    <img appLazyLoad src="https://dummyimage.com/600x400/753e75/fff&text=46" width="800" height="450">
    <img appLazyLoad src="https://dummyimage.com/600x400/753e75/fff&text=47" width="800" height="450">
  `,
})
export class CustomDirective {}

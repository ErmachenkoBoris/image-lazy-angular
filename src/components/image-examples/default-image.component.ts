import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'default-image',
  standalone: true,
  imports: [RouterLink],
  template: `


    <h1>Default Loading</h1>
    <p>По дефолту - загрузит сразу все картинки</p>
    <img src="https://dummyimage.com/600x400/753e75/fff&text=31" width="800" height="400">
    <br>
    <img src="https://dummyimage.com/600x400/753e75/fff&text=32" width="800" height="400">
    <br>
    <img src="https://dummyimage.com/600x400/753e75/fff&text=33" width="800" height="400">
    <br>
    <img src="https://dummyimage.com/600x400/753e75/fff&text=34" width="800" height="400">
    <br>
    <img src="https://dummyimage.com/600x400/753e75/fff&text=35" width="800" height="400">
    <br>
    <img src="https://dummyimage.com/600x400/753e75/fff&text=36" width="800" height="400">
    <br>
    <img src="https://dummyimage.com/600x400/753e75/fff&text=37" width="800" height="400">
  `,
})
export class DefaultImage {}

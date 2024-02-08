import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ObserveVisibilityDirective } from '../../directives/defer-custom.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'default',
  standalone: true,
  imports: [RouterLink],
  template: `


    <h1>Default</h1>
    <p>По дефолту - загрузит сразу все компоненты</p>

    <div>
        <img src="https://dummyimage.com/600x400/753e75/fff&text=331" width="800" height="400">
    </div>
    <br>
    <div>
        <img src="https://dummyimage.com/600x400/753e75/fff&text=332" width="800" height="400">
    </div>
    <div>
        <img src="https://dummyimage.com/600x400/753e75/fff&text=333" width="800" height="400">
    </div>
    <div>
        <img src="https://dummyimage.com/600x400/753e75/fff&text=334" width="800" height="400">
    </div>
    <div>
        <img src="https://dummyimage.com/600x400/753e75/fff&text=335" width="800" height="400">
    </div>
    <div>
        <img src="https://dummyimage.com/600x400/753e75/fff&text=336" width="800" height="400">
    </div>
    <div>
        <img src="https://dummyimage.com/600x400/753e75/fff&text=337" width="800" height="400">
    </div>
  `,
})
export class DefaultComponent {}

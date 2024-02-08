import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ObserveVisibilityDirective } from '../../directives/defer-custom.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'custom-defer',
  standalone: true,
  imports: [CommonModule, ObserveVisibilityDirective, RouterLink],
  template: `
      <a routerLink="/"><=Menu</a>

    <p>custom defer. Можно написать свою директиву</p>



    <div style="height: 400px;">
        <img src="https://dummyimage.com/600x400/753e75/fff&text=231" width="800" height="400">
    </div>
    <br>
    <div observeVisibility (visible)="isVisible1=true" style="height: 400px;">
        <img *ngIf="isVisible1" src="https://dummyimage.com/600x400/753e75/fff&text=232" width="800" height="400">
    </div>
    <div observeVisibility (visible)="isVisible2=true" style="height: 400px;">
        <img  *ngIf="isVisible2"  src="https://dummyimage.com/600x400/753e75/fff&text=233" width="800" height="400">
    </div>
    <div observeVisibility (visible)="isVisible3=true" style="height: 400px;">
        <img  *ngIf="isVisible3"  src="https://dummyimage.com/600x400/753e75/fff&text=234" width="800" height="400">
    </div>
    <div observeVisibility (visible)="isVisible4=true" style="height: 400px;">
        <img  *ngIf="isVisible4"  src="https://dummyimage.com/600x400/753e75/fff&text=235" width="800" height="400">
    </div>
    <div observeVisibility (visible)="isVisible5=true" style="height: 400px;">
        <img  *ngIf="isVisible5"  src="https://dummyimage.com/600x400/753e75/fff&text=236" width="800" height="400">
    </div>
    <div observeVisibility (visible)="isVisible6=true"  style="height: 400px;">
        <img  *ngIf="isVisible6"  src="https://dummyimage.com/600x400/753e75/fff&text=237" width="800" height="400">
    </div>
  `,
})
export class CustomDefer {
    isVisible1 = false;
    isVisible2 = false;

    isVisible3 = false;
    isVisible4 = false;
    isVisible5 = false;
    isVisible6 = false;
}

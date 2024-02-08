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
  <a routerLink="images">Images</a>
  <br>
  <a routerLink="components">Components</a>
  `,
})
export class MainMenu {
}

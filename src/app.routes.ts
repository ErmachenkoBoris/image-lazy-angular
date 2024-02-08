import { Routes } from '@angular/router';
import { DefaultImage } from './components/image-examples/default-image.component';
import { CustomDirective } from './components/image-examples/custom-directive.component';
import { LibLazy } from './components/image-examples/lib-lazy.component';
import { NativeLazy } from './components/image-examples/native-lazy.component';
import { Ngsrc } from './components/image-examples/ngsrc.component';
import { DefaultComponent } from './components/component-examples/default.component';
import { CustomDefer } from './components/component-examples/custom-defer.component';
import { AngularDefer } from './components/component-examples/angular-defer.component';
import { MainMenu } from './main-menu.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', component: MainMenu},
  { path: 'native-lazy', component: NativeLazy },
  { path: 'ngsrc', component: Ngsrc },
  { path: 'lib-lazy', component: LibLazy },
  { path: 'custom-directive-lazy', component: CustomDirective },
  { path: 'default', component: DefaultImage },
  { path: 'default-component', component: DefaultComponent },
  { path: 'defer-angular', component:  AngularDefer },
  { path: 'defer-custom-angular', component: CustomDefer },
];

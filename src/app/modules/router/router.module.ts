import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from '../../components/main/main.component';
import {AboutComponent} from '../../components/about/about.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        resolve: {
        },
        component: MainComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        preloadingStrategy: PreloadAllModules
      }
    ),
  ],
  exports: [
    RouterModule,
  ],
  declarations: [],
})
export class AppRouterModule {}
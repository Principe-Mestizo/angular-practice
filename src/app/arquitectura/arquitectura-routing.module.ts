import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ModelPageComponent } from './pages/model-page/model-page.component';
import { GaleryPageComponent } from './pages/galery-page/galery-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent,
  },
  {path: 'about', component: AboutPageComponent},
  {path: 'model', component: ModelPageComponent},
  {path: 'galery', component: GaleryPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArquitecturaRoutingModule { }

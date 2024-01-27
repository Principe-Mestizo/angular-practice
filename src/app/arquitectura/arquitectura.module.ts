import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArquitecturaRoutingModule } from './arquitectura-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ModelPageComponent } from './pages/model-page/model-page.component';
import { GaleryPageComponent } from './pages/galery-page/galery-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ModelPageComponent,
    GaleryPageComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    ArquitecturaRoutingModule
  ]
})
export class ArquitecturaModule { }

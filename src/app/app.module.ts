import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArquitecturaModule } from './arquitectura/arquitectura.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArquitecturaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// configuracion de animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// material
import { MaterialModule } from './core/material/material.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { InicioComponent } from './core/inicio/inicio.component';
import { CasosJuridicosComponent } from './core/casos-juridicos/casos-juridicos.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    CasosJuridicosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

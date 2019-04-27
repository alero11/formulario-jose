import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// configuracion de animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// material
import { MaterialModule } from './core/material/material.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CasosJuridicosComponent } from './components/casos-juridicos/casos-juridicos.component';
import { FormularioComponent } from './components/formulario/formulario.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    CasosJuridicosComponent,
    FormularioComponent
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

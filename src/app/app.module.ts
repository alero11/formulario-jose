import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
// configuracion de animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// material
import { MaterialModule } from './core/material/material.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CasosJuridicosComponent } from './components/casos-juridicos/casos-juridicos.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CasosJuridicosService } from './core/services/casos-juridicos.service';

// servicios
import { HttpClientModule } from '@angular/common/http';
import { OpendialogComponent } from './components/formulario/opendialog/opendialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    CasosJuridicosComponent,
    FormularioComponent,
    OpendialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutes,
    ReactiveFormsModule
  ],
  entryComponents:[OpendialogComponent],
  providers: [CasosJuridicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

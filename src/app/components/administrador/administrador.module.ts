import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministradorRoute } from './administrador.route';
import { LoginComponent } from './login/login.component';
import { ClientesComponent } from './clientes/clientes.component';
// Material
import { MaterialModule } from '../../core/material/material.module';

@NgModule({
    declarations: [
        LoginComponent,
        ClientesComponent
    ],
    imports: [
        CommonModule,
        AdministradorRoute,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule],
    exports: [],
    providers: [],
})

export class AdministradorModule { }

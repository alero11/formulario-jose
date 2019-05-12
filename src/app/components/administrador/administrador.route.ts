import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { ClientesComponent } from './clientes/clientes.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'clientes', component: ClientesComponent }]
    },
    { path: '**', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministradorRoute { }

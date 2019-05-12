import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { InicioComponent } from './components/inicio/inicio.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CasosJuridicosComponent } from './components/casos-juridicos/casos-juridicos.component';
// modulo de administrador
import { AdministradorModule } from './components/administrador/administrador.module';

const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'caso-juridico', component: CasosJuridicosComponent },
    { path: 'administrador', loadChildren: () => AdministradorModule },
    { path: 'caso-juridico/:codigo', component: FormularioComponent },
    { path: '**', component: InicioComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes { }

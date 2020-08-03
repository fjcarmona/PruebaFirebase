import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAppComponent } from './lista-app/lista-app.component'
import { GraficaComponent } from './grafica/grafica.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  { path: '', component: ListaAppComponent},
  { path: 'Usuario', component: UsuarioComponent},
  { path: 'Grafica', component: GraficaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

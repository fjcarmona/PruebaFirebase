import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAppComponent } from './lista-app/lista-app.component';
import {mySpApi} from './sp/sp-api-service';
import { GraficaComponent } from './grafica/grafica.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ChartModule } from 'angular-highcharts';

// Importamos los Módulos de Angular Fire que usaremos
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ListaAppComponent,
    GraficaComponent,
    UsuarioComponent
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFireDatabaseModule, 
    ChartModule,
    AppRoutingModule
  ],
  providers: [mySpApi],
  bootstrap: [AppComponent]
})
export class AppModule { }

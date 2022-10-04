import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DosComponent } from './dos/dos.component';
import { UnoComponent } from './uno/uno.component';

const routes: Routes = [
  {path: 'uno', component: UnoComponent},
  {path: 'dos', component: DosComponent, data: { title: 'Hola soy el comp dos'} }

]; //las defino como objeto dentro de este arreglo

@NgModule({
  imports: [RouterModule.forRoot(routes , {enableTracing: !environment.production})], // CARGO LAS RUTAS: el metodo forRoot recibe cuales son las rutas que van a utilizar  *1
  exports: [RouterModule] //lo exporta para que sea visible para los demas modulos
})
export class AppRoutingModule { }

// *1 OBS: esto mismo lo podria haber hecho en el modulo raiz 

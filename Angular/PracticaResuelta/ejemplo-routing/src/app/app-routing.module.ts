import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './auth.guard';
import { DetalleComponent } from './detalle/detalle.component';
import { DosComponent } from './dos/dos.component';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { UnoComponent } from './uno/uno.component';

const routes: Routes = [ //dentro de este modulo defino cuales son las rutas que va a tener disponible mi app
  //las defino como objetos dentro de este arreglo
  
  {path: 'uno', component: UnoComponent, children: [ //rutas hijas
    {path: 'listado', component: ListadoComponent},
    {path: 'detalle/:id', component: DetalleComponent,
      canDeactivate: [AuthGuard]}
  ]}, //el 'uno' va sin la / ('/uno'esta mal) , le paso el componente como parametro
  {path: 'dos', component: DosComponent, data: { title: 'Hola soy el comp dos'}, canActivate: [AuthGuard]},
  {path: '',  component: HomeComponent}

]; //las defino como objeto dentro de este arreglo

@NgModule({
  imports: [RouterModule.forRoot(routes , {enableTracing: !environment.production})], // CARGO LAS RUTAS: el metodo forRoot recibe cuales son las rutas que van a utilizar  *1
  exports: [RouterModule] //lo exporta para que sea visible para los demas modulos
})
export class AppRoutingModule { }

// *1 OBS: esto mismo lo podria haber hecho en el modulo raiz 

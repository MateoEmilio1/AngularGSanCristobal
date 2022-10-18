import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './auth.guard';
import { EventosResolver } from './eventos.resolver';



const routes: Routes = [

  {path:'eventos', component: EventsListComponent,
  resolve: { list : EventosResolver } ,
  children: [
    {path:'detalle/:id', component:EventDetailsComponent,
      canActivate: [AuthGuard],
      canDeactivate: [AuthGuard] }

  ]},
  

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {enableTracing: !environment.production})], //importante
  exports: [RouterModule]
})
export class AppRoutingModule { }

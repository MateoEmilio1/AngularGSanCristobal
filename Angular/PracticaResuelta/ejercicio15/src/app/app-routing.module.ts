import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { environment } from 'src/environments/environment';



const routes: Routes = [

  {path:'eventos', component: EventsListComponent, children: [
    {path:'detalle/:id', component:EventDetailsComponent}

  ]},
  

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {enableTracing: !environment.production})], //importante
  exports: [RouterModule]
})
export class AppRoutingModule { }

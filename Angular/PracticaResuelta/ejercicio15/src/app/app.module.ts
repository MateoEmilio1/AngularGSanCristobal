import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventosService } from './eventos.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

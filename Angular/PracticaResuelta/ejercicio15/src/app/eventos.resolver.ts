import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Evento } from './evento';
import { EventosService } from './eventos.service';

@Injectable({
  providedIn: 'root'
})
export class EventosResolver implements Resolve<Evento[]> { //importante pasar como Generics el Evento[]

  constructor(private service: EventosService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Evento[]> | Evento[] {
    return this.service.getEventos();
  }
}

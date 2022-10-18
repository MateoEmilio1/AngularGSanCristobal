import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventosService } from './eventos.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service: EventosService){}

  canDeactivate(component: EventDetailsComponent,){
    return component.eventoRevisad; //devuelvo la propiedad
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.service.getEventoById(route.paramMap.get('id')) ? true : false; //le paso el id para ver si coincide
  }
  
}

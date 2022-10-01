import { Injectable } from '@angular/core';

const elementos = ['Uno','Dos','Tres','Cuatro','Cinco'];

@Injectable({
  providedIn: 'root'
})
export class OrigenService {

  constructor() { 
    console.log("Me estan construyendo (soy un servicio)");
  }


  getElementos(): string[]  {
    console.log("por el servicio");
    return elementos;
  }
}

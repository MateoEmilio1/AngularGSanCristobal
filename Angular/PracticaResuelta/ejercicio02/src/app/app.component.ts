import { Component, OnInit } from '@angular/core';
import { OrigenService } from './origen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{ 
    tittle = 'Gestionando el mismo valor en dos componentes';

    valor= 105;

    elements: string[] = [];

    estilos = {
      rojo: true,
      fondo: false
    };

  constructor(private service: OrigenService) { //se crea una instancia y la pasa como parametro
      //se DEBE poner el modificador de visibilidad/acceso para poder usarlo fuera del constructor (public, private)
      console.log("contruyo el app component");
      

  }

  ngOnInit(): void { //Es necesario crear el metodo ngOnInit para implementar el OnInit 
    
    this.elements = this.service.getElementos();

  }

    elHijoAvisoAlgo($event: String):void { //el signo $ no es necesario sino que se pone por convencion
      console.log($event);
      this.valor = 0;
      
    }

}

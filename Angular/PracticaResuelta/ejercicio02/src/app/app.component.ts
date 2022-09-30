import { Component } from '@angular/core';

const elementos = ['Uno','Dos','Tres','Cuatro'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent { 
    tittle = 'Gestionando el mismo valor en dos componentes';

    valor= 105;

    elements = elementos;

    estilos = {
      rojo: true,
      fondo: false
    };

    elHijoAvisoAlgo($event: String):void { //el signo $ no es necesario sino que se pone por convencion
      console.log($event);
      this.valor = 0;
    }

}

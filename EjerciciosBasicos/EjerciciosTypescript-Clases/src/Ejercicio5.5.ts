abstract class Furniture {

    protected _manufacturer:string = 'IKEA';

    constructor() { }

    public get manufacturer():string{
        return this._manufacturer;
    }

}
 
class Desk extends Furniture {
    kind() {
     console.log('[Ejercicio 5.5]', `Este es un escritorio hecho por ${this.manufacturer}`);
    }
}

class Chair extends Furniture {
    kind() {
    console.log('[Ejercicio 5.5]', `Esta es una silla hecha por ${this.manufacturer}`);
    }
}

const desk = new Desk();
desk.kind();
console.log(desk.manufacturer); 

const chair = new Chair();
chair.kind();
console.log(chair.manufacturer); 

//    1 Hacer que solo las clases Desk y Chair puedan ver el miembro del fabricante
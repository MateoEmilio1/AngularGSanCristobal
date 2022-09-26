abstract class Animal {

    private _name: string="";

    constructor(nombre:string) { 
        this._name= nombre;
   }

    public get name():string{
        return this._name;
    }

    move(meters:number) {
    console.log(`${this._name} se movio ${meters}m.`);
    }

}

class Snake extends Animal{
    move(meters?:number) {
        console.log('Deslizandose...');
// debe invocar al metodo `move` del padre, con un deslizamiento predeterminado
// de 5 metros
        if(meters!=null){
            super.move(meters);
        }else{
            super.move(5);
        }
    }
}

class Pony extends Animal{
    move(meters?:number) {
        console.log('Galopando...');
// debe invocar al metodo `move` del padre con un galope predeterminado
// de 60 metros
        if(meters!=null){
            super.move(meters);
        }else{
            super.move(60);
        }
        
    }
}

// La clase Animal no debe ser instanciable.
// Eliminar o comentar una vez que se logra el error deseado.
//const andrew = new Animal("Andrew el Animal");
//andrew.move(5);

// --- SNAKE ----
const sammy = new Snake("Sammy la serpiente");
sammy.move();
sammy.move(3);
console.log('Nombre: ' +sammy.name); 


// --- PONY ---
const pokey = new Pony("Pokey el pony");
pokey.move();
pokey.move(34);
console.log('Nombre: ' +pokey.name); 

// 1 Añadir tipos
// 2 Hacer que la clase Snake herede de Animal
// 2 Hacer que la clase Pony herede Animal
// 2 Hacer que el miembro del nombre no pueda ser accedido públicamente
interface EggLayer {
    layEggs(): void;
}
    
interface Flyer {
    fly(height: number): void;
}

interface Swimmer{
    swim(depth: number): void
}
        
// agregar alias de tipo(s) aqui

interface BirdLike {

}

interface FishLike{

}


// --- CLASE PAJARO ---

class Bird implements BirdLike{


    constructor(public species: string) { }
        
    layEggs(): void {
        console.log('Poniendo huevos de aves.');
    }
        
    fly(height: number): void {
        console.log(`Volando a la altura de ${height} metros.`);
    }

    swim(depth: number): void {
        console.log(`Nadando a una profundidad de ${depth} metros.`);
    }

};

// --- CLASE PESCADO ---

class Fish implements FishLike{


    constructor(public species: string) {   }

    layEggs(): void {
        console.log('Poniendo huevos de pescado.');
    }

    fly(height: number): void {
        console.log(`Volando a la altura de ${height} metros.`);
    }
        
    swim(depth: number): void {
      console.log(`Nadando a una profundidad de ${depth} metros.`);
    }
}
        
function getRandomAnimal() {
    const animals = [
    new Bird('puffin'),
    new Bird('kittiwake'),
    new Fish('sea robin'),
    new Fish('leafy seadragon'),
    ];

return animals[Math.floor(Math.random() * animals.length)];
}

function interrogateAnimal(animal = getRandomAnimal()) {

    animal.fly(10) // se llama solo si es un pajaro
    animal.swim(10); // se llama solo si es un pez


    return animal.species;
}

console.log('[Ejercicio 4.4]', `Tenemos un ${interrogateAnimal()} en nuestras manos!`);
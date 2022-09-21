class Persona {
constructor(public nombre: string, public edad: number) { }
}

const juan = new Persona('Juan', 31);
    
console.log('[Ejercicio 2.2]', `${juan.nombre} tiene ${juan.edad} anios.`);

/* Cree e implemente una interfaz en ‘Persona‘ para asegurarse de que siempre tenga acceso
a las propiedades miembros ‘nombre‘ y ‘edad‘ */

interface Persona {
    nombre: string;
    edad: number;

}
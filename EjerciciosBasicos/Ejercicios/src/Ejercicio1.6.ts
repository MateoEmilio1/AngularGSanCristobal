const elementoInventario: [string, number] = ['tuerca', 11]; //especifico el tipo de elementos que se encuentra en cada posicion

// despues lo desestructuramos
const [nombre, cantidad] = elementoInventario; //uso elementoInventario para asignarle los valores a nombre y cantidad
const mensaje = agregarInventario(nombre , cantidad); /*paso como parametro nombre y cantidad, la funcion sabe que son de tipo string y number gracias a
                                                          que fue especificado en la declaracion de elementoInventario */

console.log('[Ejercicio 1.6]', mensaje);

function agregarInventario(nombre: string, cantidad: number): string {

    return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
}
function layEggs(quantity:number, color: string) {

console.log( `[Ejercicio 3.5] Acabas de poner ${quantity} huevos ${color}. Buen trabajo!`);

return {
    quantity,
    color
}
}

let datos = layEggs(3,'amarillos');
console.log(datos);

/*  1 - Añadir anotación de tipo de parámetro
    2 -  A pesar de que esta función no vuelve, agregue un tipo de retorno explícito */
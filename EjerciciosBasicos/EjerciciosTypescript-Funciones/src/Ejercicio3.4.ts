function greet(greeting?: string):string {

if(greeting)    {
    return greeting.toUpperCase();
}else{
    return 'hola';
}
    
}
    
const defaultGreeting = greet();
const portugueseGreeting = greet('Oi como vai!');
    
console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);
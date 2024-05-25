//Write a JavaScript program that recreates the pattern below.
//Do this challenge twice: first by using one loop, then by using two nested for loops 
//(Nested means one inside the other - check out this tutorial of nested loops).
//Do this Daily Challenge by yourself, without looking at the answers on the internet.

const iteration = 6 //definimos 6 iteraciones
let stars = "" //definimos para acumular las estrellas en cada iteracion
for (let i = 0; i < iteration; i++) {
    stars = stars + " * ";
    console.log(stars)    
}

for (let i = 0; i < iteration; i++) {
    const numerodeestrellas = i + 1; // dice el numero de estrellas en cada linea
    let lineadeestrellas = "" //guarda la cantidad de estrellas de cada linea
    for (let j = 0; j <numerodeestrellas; j++) {
      lineadeestrellas = lineadeestrellas + " * "
    }
    console.log(lineadeestrellas)
}
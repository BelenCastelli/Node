// * No forma parte del módulo fs de node, es un modulo propio que lee datos de una secuencia de entrada linea a linea
const fs=require('fs')
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { constants } = require('node:fs/promises');

// *Crea interfaz pada poder manipular, puedo pasar un objeto o pasarle directamente los parametros
// const rl = readline.createInterface( process.stdin, process.stdout);
const rl = readline.createInterface( {input:process.stdin, output: process.stdout});

let person2 = {
    nombre:'',
    apellido: '',
    edad: 0
}
// *funcion de readline de question
// rl.question(query[, options], callback)


function crearObjeto() {

    rl.question('¿cuál es tu nombre? ', (name) => {
        person2.nombre = name
        console.log(person2.nombre);

        rl.question('¿cuál es tu apellido? ', (surname) => {
            person2.apellido = surname
            console.log(person2.apellido);

            rl.question('¿cuál es tu edad? ', (age) => {
                person2.edad = age
                console.log(person2.edad);
                rl.close();


                console.log(person2);
                fs.writeFile('person2.json', JSON.stringify(person2), error => {
                    if(error){
                        console.log('error' + error);
                    } else  {
                        console.log('archivo escrito correctamente'); }
                })
                });
            });
    
    });
}

crearObjeto();

rl.on('close', () =>{
    console.log('Proceso terminado');
})












const { error } = require('console');
const fs = require('fs/promises')
const readline = require('node:readline');

let persona3 = {
    nombre:'',
    apellido: '',
    edad: 0
}

function pregunta(pregunta){
    const question = new Promise((resolve, reject) =>{
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        })
   
        rl.on('close', () => {
            reject(error);
        });

    })

    return question
}

function crearObjeto(){
   pregunta('¿Cual es tu nombre? ')
   .then((nombre) => {
    persona3.nombre = nombre
    return pregunta('¿Cual es tu apellido? ')
   })
   .then((apellido) => {
    persona3.apellido = apellido
    return pregunta ('¿Cual es tu edad? ')
   }) 
   .then((edad) =>{
    persona3.edad = edad
    return fs.writeFile('promesa3.json', JSON.stringify(persona3))
   })
   .then(() =>{
    return fs.readFile('promesa3.json', 'utf-8')
   })
   .then ((contenido) =>{
    console.log(JSON.parse(contenido))
   })
   .catch((err) => {
    console.log(err)
   })
}

crearObjeto();

// * Con async/await
// let persona4 = {
//     nombre:'',
//     apellido: '',
//     edad: 0
// }

// async function crearObjeto2(){
//     try{
//         persona4.nombre =  await pregunta('¿Cual es tu nombre? ')
//         persona4.apellido =  await pregunta('¿Cual es tu apellido? ')
//         persona4.edad =  await pregunta('¿Cual es tu edad? ')

//         await fs.writeFile('promesa4.json', JSON.stringify(persona4))

//         const leer = await fs.readFile('promesa4.json', 'utf8')
//         console.log(JSON.parse(leer));
      
//     } catch(err) {
//         console.log(err);
//     }
// }



// crearObjeto2();
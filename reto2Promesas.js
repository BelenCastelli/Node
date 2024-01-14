const { error } = require('console')
const fs = require('fs/promises')

let persona = {
    nombre: 'Carlos',
    apellido: 'González',
    edad: 32
}
//*  EJEMPLO DE CLASE

// fs.writeFile('persona.json', JSON.stringify(persona))
// .then(() => {
//     return fs.readFile('persona.json', 'utf-8')
// })
// .then (data =>{
//     console.log(JSON.parse(data));
// })

let file = 'promesa1.json'
data = JSON.stringify(persona)

function writeFile(){
    return fs.writeFile(file, data)
}

function readFile(){
    return fs.readFile(file, 'utf-8')
}

// *Llamadas

writeFile()
    .then(() => {console.log('archivo escrito correctamente')})
    .then(() => {
       return readFile();
    })
    .then((contenido) => {
        let data2 = JSON.parse(contenido)
        console.log(data2);
    })
    .catch(() =>{
        new Error (`Error + ${error}`)
    })

// *con async/await
let file2 = 'promesa2.json'
async function writeAndRead(){
    try{
            await fs.writeFile(file2, data)
    const leer = await fs.readFile(file2, 'utf-8')
    console.log(JSON.parse(leer));
    
    } catch (err){
        console.log(err);
    }
}

writeAndRead();
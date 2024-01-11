
const fs = require('fs')
let file = 'person.json'


let person = {
    name: "María",
    surname: "García", 
    age: 30
}
// pertenecen al modulo de fileSystem de Node.js. Son funciones asíncronas, que utilizan callbacks
fs.writeFile(file, JSON.stringify(person), (error) => {
        if(error){
            console.log('error' + error);
        } else  {
            console.log('archivo escritoo correctamente'); 
            
            fs.readFile(file, 'utf8', (error, data) =>{
                if(!error){
                    console.log(data);
                } else {
                    console.log('error' + error);
                }
            })
        }
    }
)

console.log("Hola");

// fs.writeFile('person.json', JSON.stringify(person) , (function(error){
//         if(error){
//             console.log('error' + error);
//         } else  {
//             console.log('archivo escritoo correctamente'); 

//         }

//         fs.readFile('person.json', 'utf8', (error, data) =>{
//             if(!error){
//                 console.log(data);
//             } else {
//                 console.log('error' + error);
//             }
//         })
//     }
// ))








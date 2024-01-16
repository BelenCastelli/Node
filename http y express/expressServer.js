const express = require('express');

const app = express();

app.get('/', (request, response) => {
// mostrar por consola ‘Petición recibida del cliente’ por cada conexión que se haga desde el cliente
    console.log('Petición recibida del cliente');
// mostrar por consola la url método y el user agent por el que se está haciendo la petición
    console.log('Request method: ' + request.method);
    console.log('Request URL: ' + request.url);
    console.log('Request User-Agent: ' + request.headers['user-agent']);
    // console.log(response.statusCode);

// Le retorne al usuario un mensaje del tipo application json con el status code 200 y un mensaje
    //* Con writeHead  para  escribir los encabezados de una respuesta HTTP antes de enviar el cuerpo de la respuesta.
    // * y .end para finalizar la respuesta HTTP
        // response.writeHead(200,{'content-type': 'application/json'})
        // .end espera un argumento que sea un string ->
        // response.end(JSON.stringify("200,{'ok': true, 'message': 'Recibido!'})"))
    // *con .status(status.json(obj)) = asume como content-type un json
    response.status(200).json({'ok': true, 'message': 'Recibido!'});
})

app.get('/bye', (req, res) => {
   res.status(200).json({'ok': true, 'message': 'Adios!'});
})
app.listen(3000);
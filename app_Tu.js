const http = require('http');
const { listeners } = require('process');
http.createServer((req, res) => {
        res.write("Hola mundo");
        res.end();
    })
    .listen(8080);
console.log('Escuchandom el puerto', 8080);
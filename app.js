require('dotenv').config()
const port = process.env.PORT
const express = require('express')
const app = express()

//servir un contenido estatico
app.use(express.static('public'));


app.get('/', function(req, res) {
    res.send('Home page')
});

app.get('/holamundo', function(req, res) {
    res.send('hola mundo')
})

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
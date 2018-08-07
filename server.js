var express = require('express'),
    app = express(),
    port = process.env.PORT || 8093,
    cors = require('cors'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/mailRoutes');
routes(app);

//Ejemplo: GET http://localhost:8080/saludo?nombre=RODOLFO
/*
app.get('/saludo', function(req, res) {
    var _nombre = req.query.nombre;
    res.send('Saludos ' + _nombre + '. Buena tarde!');
    console.log('Envia saludos a ' + _nombre + ' : OKAY!');
});
*/

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('GAG Email Service RESTful API server started on: ' + port);
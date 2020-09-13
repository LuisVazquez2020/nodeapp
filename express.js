const express = require('express');

const app = express();

const Port = process.env.PORT || 3000;

// conexion a base de datos

const mongoose = require('mongoose');

//Motor de plantilla
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // specify the views directory
//console.log(__dirname);

app.use(express.static(__dirname + "/public"));
//console.log(__dirname);


//Rutas Web --importadas
app.use('/', require('./router/rutasWeb'))
app.use('/mascotas', require('./router/mascotas'))

app.use((req, res, next)=>{
    res.status(404).render("error.ejs",
    {
        titulo1:"ERROR 404",
        descripcion:"estamos trabajando en su error"
    })
})

app.listen(Port, ()=>{
    console.log(' te estamos observando ...!');
})
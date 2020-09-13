const express = require('express');

const app = express();

const Port = 8080;

//Motor de plantilla
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // specify the views directory
//console.log(__dirname);

app.use(express.static(__dirname + "/public"));
//console.log(__dirname);

app.get('/', function(req, res){
 //   console.log(__dirname);

    res.render("index", {titulo: "Mi titulo dinamico"})
})

app.get('/services', function(req, res){
    console.log(__dirname);
    res.render("servicios", {tituloServicios:"Hola Mundo esta es la pagina de servicios"})
})

app.get('/contactos', function(req, res){

    res.render("contactos", {tituloContactos:"Hola Mundo esta es la pagina de contactos"})

})

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
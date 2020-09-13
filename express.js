const express = require('express');

const app = express();

const Port = process.env.PORT || 3000;

// conexion a base de datos
const user = "luissugusdev";
const password = "nd3efB13AGtmwxGB";
const dbname = "veterinaria";
const uri = `mongodb+srv://${user}:${password}@cluster0.0v1f3.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const mongoose = require('mongoose');
mongoose.connect(uri, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log('Base de datos conectada...!'))
.catch(e => console.log(e))



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
    console.log(`estamos escuchando on port ${Port}!`);
})
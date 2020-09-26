const express = require('express');

const bodyParser = require('body-parser');

const app = express();




//configurations
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

require('dotenv').config()

const Port = process.env.PORT || 3000;


// connect to database

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.0v1f3.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

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



const express = require('express');
const { hoyFecha } = require('../utils/utils');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
   // console.log('Time: ', hoyFecha())
    next()
  });

  //el ruteo
router.get('/', function(req, res){
//   console.log(__dirname);
    res.render("index", {titulo: "Mi titulo dinamico"})
})

router.get('/services', function(req, res){
    //console.log(__dirname);
    res.render("servicios", {tituloServicios:"Hola Mundo esta es la pagina de servicios"})
})

router.get('/contactos', function(req, res){
    res.render("contactos", {tituloContactos:"Hola Mundo esta es la pagina de contactos"})
})
/* router.get('/mascotas', function(req, res){
    res.render("mascotas", {tituloMascotas:"Hola Mundo esta es la pagina de Mascotas"})
}) */




module.exports = router; 
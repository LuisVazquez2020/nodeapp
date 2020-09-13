const express = require('express')
const router = express.Router();
const Mascota = require('../models/mascota')


router.get('/', async (req, res, next )=>{
 try{
    const arrayMascotasDB = await Mascota.find()
    console.log(arrayMascotasDB);

    res.render('mascotas', {
        arrayMascotas:arrayMascotasDB
        
    })
 } catch(error){
console.log(error);
 }
 
     
}); 

module.exports = router;
/*  [
            {id:"id",nombre:"rex",descripcion:"rex descripcion"},
            {id:"id2",nombre:"caja",descripcion:"box descripcion"}
           ] */
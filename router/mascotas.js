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


router.get('/crear', (req, res)=>{
    res.render('crear')
})


router.post('/', async (req, res)=>{
    const body = req.body
try{
    const mascotaDB = new Mascota(body)
    await mascotaDB.save()
    res.redirect('/mascotas')
    
} catch (error) {
    console.log(error)
}
})


module.exports = router;



/*  [
            {id:"id",nombre:"rex",descripcion:"rex descripcion"},
            {id:"id2",nombre:"caja",descripcion:"box descripcion"}
           ] */
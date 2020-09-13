const express = require('express')
const router = express.Router();

router.get('/', (req, res, next )=>{
 res.render('mascotas', {
     arrayMascotas: [
         {id:"id",nombre:"rex",descripcion:"rex descripcion"},
         {id:"id2",nombre:"caja",descripcion:"box descripcion"}
        ]
 });   
}); 

module.exports = router;
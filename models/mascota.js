const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//crear el schema
const mascotaSchema = new Schema({
    nombre: String,
    descripcion: String
})

// crear modelo usando mongoose

const Mascota = mongoose.model('Mascota',mascotaSchema);

module.exports = Mascota;
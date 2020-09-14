function addZero(i) {
console.log(i);
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

function hoyFecha(){
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth()+1;
    var yyyy = hoy.getFullYear();
    
    dd = addZero(dd);
    mm = addZero(mm);

    return dd+'/'+mm+'/'+yyyy;
}


module.exports = {
    hoyFecha
}

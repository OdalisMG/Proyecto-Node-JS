'use strict'

var controller = {
    
    welcome: function(req, res){
    console.log("Get ejecutado en raiz");
    res.send("Mi primer debug");
    },
    
    alumnos:function(req, res){
        res.send("Mi listado de alumnos")
    },

    alumno: function(req, res){
        let cal1 = 10;
        let cal2 = 8;
        let cal3 = 8;
        let final = (cal1 + cal2 + cal3) / 3;
        console.log(final);
        res.send("La calificacion final es: "+final);
    },

    crear_alumno: (req, res) => {
        res.send("Creamos un alumno");
    }
};

module.exports = controller;
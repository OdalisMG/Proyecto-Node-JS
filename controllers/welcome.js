'use strict'
var controller = {
    welcome: function(req, res){
        console.log("Get ejecutado en raiz");
        res.send("Mi primer app");
    }
};

module.exports = controller;

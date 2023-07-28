'use strict'
const express = require('express');
const api = express.Router();

var WelcomeController = require('../controllers/welcome');

api.get("/", WelcomeController.welcome);
api.get("/alumnos", WelcomeController.alumnos);
api.get("/alumno", WelcomeController.alumno);
api.post("/alumno", WelcomeController.crear_alumno);

api.put("/alumno", (req, res) => {
    res.send("Actualizamos un alumno");
});

api.delete("/alumno", (req, res) => {
    res.send("Eliminamos un alumno");
});


module.exports = api;
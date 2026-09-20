const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensaje: "Laboratorio 01 - Arquitectura de Software",
    estado: "Servidor funcionando",
  });
});

module.exports = app;
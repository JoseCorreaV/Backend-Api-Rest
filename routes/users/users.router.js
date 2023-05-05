// Modulo para categoria
const express = require('express');
//const { faker } = require('@faker-js/faker')
const routerUsr = express.Router();

const usersService = require('../../services/users.service');
const servicesU = new usersService();
/* -------------------------GET: parametros query------------------------ */
//creamos una ruta
routerUsr.get('/', (req, res) => {
  //si existen los parameros
  const { limit, offset } = req.query;
  if (limit && offset) { // para que entre => http://localhost:3000/user?limit=10&offset=5
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No hay parametros');
  }
});

/* ----------------------POST-------------------------- */
// crea y obtiene la información
routerUsr.post('/', (req, res) => {
  // para recibir los parametros que llegan de thunder client
  const body = req.body;
  const newUser = servicesU.create(body);
  res.json(newUser);
});

/* ----------------------PATCH------------------------- */
// actualizar parcialmente los elementos
routerUsr.patch('/:id', (req, res) => {
  //Recibir id que esta en los parametros
  const { id } = req.params;
  // para recibir los parametros que llegan de thunder client
  const body = req.body;
  const user = servicesU.update(id,body);
  res.json(user);
});


/* ----------------------DELETE------------------------- */
//Eliminar los elementos
routerUsr.delete('/:id', (req, res) => {
  //Recibir id que esta en los parametros
  const { id } = req.params;
  const rpt = servicesU.update(id);
  res.json(rpt);
});

module.exports = routerUsr;

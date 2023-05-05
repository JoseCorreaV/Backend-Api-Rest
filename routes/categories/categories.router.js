// Modulo para categoria
const express = require('express');
//const { faker } = require('@faker-js/faker')
const routerCt = express.Router();

const categoriesService = require('../../services/categories.service');
const servicesCt = new categoriesService();

/* -------------------- Get: recibir parametros -------------------*/
// obtener 2 identificadores de un parametro(url)
routerCt.get('/:categoriId/products/:productId', (req, res) => {
  // creamos variables en base a los parametros puesto en el get => :productId..
  const { categoriId, productId } = req.params;
  res.json([{
    categoriId, // llamamos las variables;
    productId
  }]);

});

 /*-----------------------------------------------------------------*/
routerCt.get('/', (req, res) => {
  const categori = servicesCt.find();
 res.json(categori);
});

/* ----------------------POST-------------------------- */
// crea
routerCt.post('/', (req, res) => {
  // para recibir los parametros que llegan de thunder client
  const body = req.body;
  const newCategorie =  servicesCt.create(body);
  res.json(newCategorie);
});

/* ----------------------PATCH------------------------- */
// actualizar parcialmente los elementos
routerCt.patch('/:id', (req, res) => {
  //Recibir id que esta en los parametros
  const { id } = req.params;
  // para recibir los parametros que llegan de thunder client
  const body = req.body;
  const categorie = servicesCt.update(id,body);
  res.json(categorie);
});


/* ----------------------DELETE------------------------- */
//Eliminar los elementos
routerCt.delete('/:id', (req, res) => {
  //Recibir id que esta en los parametros
  const { id } = req.params;
  const rpt = servicesCt.delete(id);
  res.json(rpt);
});


module.exports = routerCt;

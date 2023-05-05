// validar la data que envian desde el cliente

const Joi = require('joi');

// des pues del tipo de dato agregar las validaciones de ese campo
const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

const createSchemaProduct = Joi.object({
  // añadir si es requerida o no .requiered()
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

const updateSchemaProduct = Joi.object({
  name: name,
  price: price,
  image: image,
});

// validad si es correcto el id para hacer las validaciones de la BD
const getSchemaProduct = Joi.object({
  id: id.required(),
});


module.exports = { createSchemaProduct, updateSchemaProduct, getSchemaProduct};

// programación orientada a objetos POO
// aca va toda la logica de los datos
const { faker } = require('@faker-js/faker')
const boom = require('@hapi/boom');


class productsService {

  constructor() {
    this.products = [];
    this.generate();
  }

  async generate() {
    // si no existe un valor de size por defecto limit = 10 pero si ingresamos
    /// /productos?size=1 => limit = 1
    const limit = 100;
    // agregar por defecto 10 productos utilizando faker y size
    for (let index = 0; index < limit; index++) {
      this.products.push({
        // generar un string id aleatorio
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        // para productos que no se deberian ver
        isBlock: faker.datatype.boolean(),
      });
    }
  }


  //---------------------------------------------------------
  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }
  //------------------------------------------------------
  find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    })
  }
  //---------------------------------------------------------
  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    // regla del negocio
    if(product.isBlock){
      throw boom.conflict('product is block');
    }
    return product;
  }
  //---------------------------------------------------------
  async update(id, changes) {
    // encontrar la posición del con findIndex
    const index = this.products.findIndex(item => item.id === id);
    // si no encuentra el elemento normalmente envia un -1
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    const produc = this.products[index];
    // en la posición del objeto aplicar los cambios y dejar los demas elementos
    this.products[index] = {
      ...produc,
      ...changes
    };
    return this.products[index];
  }
  //---------------------------------------------------------
  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    // enviar una posición para poder eliminarla .splice
    // y cuantos elementos deseo eliminar a partir de la posición
    this.products.splice(index, 1);
    // retorna el id eliminado
    return { id };
  }

}

module.exports = productsService;

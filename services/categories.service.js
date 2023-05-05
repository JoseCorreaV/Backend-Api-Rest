// programación orientada a objetos POO
// aca va toda la logica de los datos
const { faker } = require('@faker-js/faker')


class categoriesService {

  constructor() {
    this.categories = [];
  }

  generate() {
  }


  //---------------------------------------------------------
  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.categories.push(newProduct);
    return newProduct;
  }
  //------------------------------------------------------
  find() {
    return this.categories
  }
  //---------------------------------------------------------
  findOne(id) {
    return this.categories.find(item => item.id === id);
  }
  //---------------------------------------------------------
  update(id, changes) {
    // encontrar la posición del con findIndex
    const index = this.categories.findIndex(item => item.id === id);
    // si no encuentra el elemento normalmente envia un -1
    if (index === -1) {
      throw new Error('categoria not found');
    }
    const categori = this.categories[index];
    // en la posición del objeto aplicar los cambios y dejar los demas elementos
    this.categories[index] = {
      ...categori,
      ...changes
    };
    return this.categories[index];
  }
  //---------------------------------------------------------
  delete(id) {
    const index = this.categories.findIndex(item => item.id === id);
     if (index === -1) {
      throw new Error('produc not found');
    }
    // enviar una posición para poder eliminarla .splice
    // y cuantos elementos deseo eliminar a partir de la posición
    this.categories.splice(index,1);
    // retorna el id eliminado
    return {id};
  }


}

module.exports = categoriesService;
